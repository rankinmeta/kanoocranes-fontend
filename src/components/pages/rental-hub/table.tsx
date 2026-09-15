import { cn } from "@/lib/utils";
import type { TableSectionProps } from "@/type";
import Link from "next/link";

const ModelTable = ({
  table_section,
  className,
}: {
  table_section: TableSectionProps[];
  className?: string;
}) => {
  return (
    <div
      className={cn("overflow-x-auto rounded-md bg-[#f5f5f5] pb-1", className)}
    >
      <div className="min-w-180">
        <div className="bg-secondary px-5 py-2.5 text-white grid grid-cols-6 text-xs gap-2">
          <span>MODELS</span>
          <span>REACH</span>
          <span>MAXIMUM LOAD</span>
          <span>TIP LOAD</span>
          <span>FEM 1001</span>
          <span>EN 14439 - C25</span>
        </div>
        {table_section.map((item, index) => (
          <div
            key={item.id}
            className={`grid grid-cols-6 gap-2 px-4 py-2.5 text-sm mx-1 ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white rounded-md"
            }`}
          >
            <span className="font-medium whitespace-nowrap">{item.model}</span>
            <span className="whitespace-nowrap">{item.reach}</span>
            <span className="whitespace-nowrap">{item.maximum_load}</span>
            <span className="whitespace-nowrap">{item.tip_load}</span>
            {item.fem_1001 && (
              <Link
                href={
                  process.env.NEXT_PUBLIC_STRAPI_API_URL + item.fem_1001.url
                }
                download={"Kanoo Cranes FEM1001.pdf"}
                className="text-blue-600 hover:underline whitespace-nowrap"
              >
                Download
              </Link>
            )}
            {item.en_14439_c25 && (
              <Link
                href={
                  process.env.NEXT_PUBLIC_STRAPI_API_URL + item.en_14439_c25.url
                }
                download={"Kanoo Cranes EN14439-C25.pdf"}
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

export default ModelTable;
