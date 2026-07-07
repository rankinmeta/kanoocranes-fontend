interface Props {
  specifications: {
    id: number;
    col1: string;
    col2: string;
  }[];
  manufacturer: string;
}

export function SpecificationTable({ specifications, manufacturer }: Props) {
  if (specifications?.length === 0) return null;
  
  return (
    <div className="mt-8">
      <h3 className="mb-4 text-2xl font-manrope font-medium">Specifications</h3>

      <div className="overflow-hidden rounded-md bg-[#f5f5f5]">
        <div className="bg-secondary px-5 py-2.5 text-white">{manufacturer}</div>

        {specifications.map((item, index) => (
          <div
            key={item.id}
            className={`grid grid-cols-2 px-4 py-2.5 text-sm mx-1 ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white rounded-md"
            }`}
          >
            <span className="font-medium">{item.col1}</span>

            <span>{item.col2}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
