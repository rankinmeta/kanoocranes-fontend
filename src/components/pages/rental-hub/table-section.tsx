import type { TableSectionProps } from "@/type";
import ModelTable from "./table";

export function TableSection({
  table_section,
  className,
}: {
  table_section: TableSectionProps[];
  className?: string;
}) {
  if (!table_section || table_section.length === 0) return null;
  return (
    <section className={className}>
      <div className="container container-padding-x py-10 md:py-16">
        <ModelTable table_section={table_section} />
      </div>
    </section>
  );
}
