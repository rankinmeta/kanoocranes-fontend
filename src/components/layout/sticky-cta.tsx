import HighlightedTitle from "../common/highlight-title";
import { extractHighlightText } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { ContactDialog } from "../dialog/contact-dialog";

const StickyCTA = ({
  title,
  defaultCrane,
}: {
  title: string;
  defaultCrane?: string;
}) => {
  return (
    <div className="bg-white fixed z-60 bottom-0 w-full py-4 border-t shadow-2xl">
      <div className="container container-padding-x flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        <HighlightedTitle
          title={title || ""}
          highlights={extractHighlightText(title || "")}
          className="text-xl!"
        />

        <div className="flex items-center gap-2">
          <Link href="/contact-us" target="_blank">
            <Button>Rent This Crane</Button>
          </Link>
          <ContactDialog defaultCrane={defaultCrane}>
            <Button className="bg-white text-secondary border-secondary hover:bg-secondary hover:text-white">
              Request a Quote
            </Button>
          </ContactDialog>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
