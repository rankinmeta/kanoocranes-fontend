import HighlightedTitle from "../common/highlight-title";
import { extractHighlightText } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

const StickyCTA = ({title}: { title: string }) => {
  return (
    <div className="bg-white fixed z-60 bottom-0 w-full py-4 border-t shadow-2xl hidden md:block">
      <div className="container container-padding-x flex justify-between items-center">
        <HighlightedTitle
          title={title || ""}
          highlights={extractHighlightText(
            title || ""
          )}
          className="text-xl!"
        />

        <div className="flex items-center gap-2">
          <Button>Rent This Crane</Button>
          <Link href="/contact-us" target="_blank">
            <Button className="bg-white text-secondary border-secondary hover:bg-secondary hover:text-white">
              Request a Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
