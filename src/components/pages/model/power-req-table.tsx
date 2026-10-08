type Props = {
  power_requirement: {
    id: number;
    label: string;
    values: {
      id: number;
      col1: string;
      col2?: string;
      col3: string;
      col4?: string;
    }[];
  }[];
};

export function PowerReqTable({ power_requirement }: Props) {
  if (!power_requirement || power_requirement.length === 0) return null;
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-2xl font-manrope font-medium">
        Power Requirements
      </h3>

      <div className="w-full overflow-x-auto">
        <div className="min-w-full">
          {power_requirement.map((section) => {
            const columnCount = Math.max(
              ...section.values.map(
                (row) =>
                  Object.values(row).filter(
                    (value) => value !== null && value !== undefined,
                  ).length,
              ),
            );

            return (
              <div key={section.label}>
                {/* Section heading */}
                <div
                  className="grid bg-[#fafafa] rounded-t-lg"
                  style={{
                    gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
                  }}
                >
                  <div
                    className="px-4 py-3 text-sm font-medium uppercase tracking-[0.15em]"
                    style={{
                      gridColumn: `span ${columnCount}`,
                    }}
                  >
                    {section.label}
                  </div>
                </div>

                {/* Rows */}
                {section.values.map((row, index) => (
                  <div
                    key={index}
                    className="grid bg-[#fafafa]"
                    style={{
                      gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
                    }}
                  >
                    <div className="border-t border-white px-4 py-3 text-sm col-span-2">
                      {row.col1}
                    </div>

                    {row.col2 !== undefined && (
                      <div className="border-t border-white px-4 py-3 text-sm">
                        {row.col2}
                      </div>
                    )}

                    <div className="border-t border-white px-4 py-3 text-sm">
                      {row.col3}
                    </div>

                    {row.col4 !== undefined && (
                      <div className="border-t border-white px-4 py-3 text-sm">
                        {row.col4}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
