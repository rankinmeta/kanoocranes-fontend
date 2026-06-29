import {
    type BlocksContent,
    BlocksRenderer,
} from "@strapi/blocks-react-renderer";
import { createElement, RefObject } from "react";

interface ResourceContentProps {
    content: BlocksContent;
    sectionRefs: RefObject<{
        [key: string]: HTMLElement | null;
    }>;
}

const ResourceContent = ({
    content,
    sectionRefs,
}: Readonly<ResourceContentProps>) => {
    return (
        <div className="prose font-manrope mx-auto">
            <BlocksRenderer
                content={content}
                blocks={{
                    heading: ({ children, level }) => {
                        // @ts-expect-error: children is not always an array
                        const text = children[0].props.text;
                        const id = text.replaceAll(" ", "-").toLowerCase();
                        const Tag =
                            `h${level}` as keyof React.JSX.IntrinsicElements;

                        return createElement(
                            Tag,
                            {
                                id,
                                ref: (el: HTMLElement | null) => {
                                    if (el) sectionRefs.current[id] = el;
                                },
                            },
                            children
                        );
                    },
                }}
            />
        </div>
    );
};

export default ResourceContent;
