import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import ResourceCard from "./resource-card";

const ResourceListSection = () => {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-5 mt-7 md:mt-14">
                <ResourceCard className="w-full md:w-auto" />
                <ResourceCard className="w-full md:w-auto" />
                <ResourceCard className="w-full md:w-auto" />
                <ResourceCard className="w-full md:w-auto" />
                <ResourceCard className="w-full md:w-auto" />
                <ResourceCard className="w-full md:w-auto" />
            </div>

            <Pagination className="mt-10">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            className="bg-white text-primary pr-3.5 pl-3 mr-3 rounded-none hover:bg-primary hover:text-white"
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            href="#"
                            className="bg-white text-primary p-3 px-5 h-10 rounded-none hover:bg-primary hover:text-white"
                        >
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            href="#"
                            isActive
                            className="bg-white text-primary p-3 px-5 h-10 rounded-none hover:bg-primary hover:text-white"
                        >
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis className="bg-white text-primary p-3 px-5 h-10 rounded-none hover:bg-primary hover:text-white" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            href="#"
                            className="bg-white text-primary p-3 px-5 h-10 rounded-none hover:bg-primary hover:text-white"
                        >
                            10
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            className="bg-white text-primary pl-3.5 pr-3 ml-2 rounded-none hover:bg-primary hover:text-white"
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default ResourceListSection;
