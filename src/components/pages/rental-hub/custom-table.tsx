import { cn } from "@/lib/utils";
import type { CustomTableSectionProps, TableSectionProps } from "@/type";
import Link from "next/link";

const CustomModelTable = ({
  table_section,
  className,
}: {
  table_section: CustomTableSectionProps[];
  className?: string;
}) => {
  if (!table_section || table_section.length === 0) return null;
  return (
    <div
      className={cn("overflow-x-auto rounded-md bg-[#f5f5f5] pb-1", className)}
    >
      <div className="min-w-180">
        <div className="bg-secondary px-5 py-2.5 text-white grid grid-cols-6 text-xs gap-2">
          {table_section[0].model && <span>MODEL</span>}
          {table_section[0].max_lifting_height && (
            <span>MAX. LIFTING HEIGHT</span>
          )}
          {table_section[0].max_load && <span>MAX. LOAD</span>}
          {table_section[0].tip_load && <span>TIP LOAD</span>}
          {table_section[0].max_radius && <span>MAX. RADIUS</span>}
          {table_section[0].lifting_height && <span>LIFTING HEIGHT</span>}
          {table_section[0].lifting_capacity && <span>LIFTING CAPACITY</span>}
          {table_section[0].tower_height && <span>TOWER HEIGHT</span>}
          {table_section[0].brochure && <span>BROCHURE</span>}
          {table_section[0].factsheet && <span>FACTSHEET</span>}
        </div>
        {table_section.map((item, index) => (
          <div
            key={item.id}
            className={`grid grid-cols-6 gap-2 px-4 py-2.5 text-sm mx-1 ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white rounded-md"
            }`}
          >
            {item.model && (
              <span className="font-medium whitespace-nowrap text-blue-500">
                {item.model}
              </span>
            )}
            {item.max_lifting_height && (
              <span className="whitespace-nowrap">
                {item.max_lifting_height}
              </span>
            )}
            {item.max_load && (
              <span className="whitespace-nowrap">{item.max_load}</span>
            )}
            {item.tip_load && (
              <span className="whitespace-nowrap">{item.tip_load}</span>
            )}
            {item.max_radius && (
              <span className="whitespace-nowrap">{item.max_radius}</span>
            )}
            {item.lifting_height && (
              <span className="whitespace-nowrap">{item.lifting_height}</span>
            )}
            {item.lifting_capacity && (
              <span className="whitespace-nowrap">{item.lifting_capacity}</span>
            )}
            {item.tower_height && (
              <span className="whitespace-nowrap">{item.tower_height}</span>
            )}
            {item.brochure && (
              <Link
                href={
                  process.env.NEXT_PUBLIC_STRAPI_API_URL + item.brochure.url
                }
                download={"Kanoo Cranes BROCHURE.pdf"}
                className="text-blue-600 hover:underline whitespace-nowrap"
              >
                Download
              </Link>
            )}
            {item.factsheet && (
              <Link
                href={
                  process.env.NEXT_PUBLIC_STRAPI_API_URL + item.factsheet.url
                }
                download={"Kanoo Cranes FACTSHEET.pdf"}
                className="text-blue-600 hover:underline whitespace-nowrap"
              >
                Download
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomModelTable;
