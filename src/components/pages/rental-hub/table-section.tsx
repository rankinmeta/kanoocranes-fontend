import type { TableSectionProps } from "@/type";
import ModelTable from "./table";

export function TableSection({
  title,
  table_section,
  className,
}: {
  title?: string;
  table_section: TableSectionProps[];
  className?: string;
}) {
  if (!table_section || table_section.length === 0) return null;
  return (
    <section className={className}>
      <div className="container container-padding-x py-10 md:py-16">
        <h3 className="text-2xl lg:text-3xl font-manrope font-medium mb-10">
          {title}
        </h3>
        <ModelTable table_section={table_section} />
      </div>
    </section>
  );
}
