interface Props {
    specifications: {
        label: string;
        value: string;
    }[];
}

export function SpecificationTable({ specifications }: Props) {
    return (
        <div className="mt-8">
            <h3 className="mb-4 text-2xl font-manrope font-medium">
                Specifications
            </h3>

            <div className="overflow-hidden rounded-md bg-[#f5f5f5]">
                <div className="bg-secondary px-5 py-2.5 text-white">JASO</div>

                {specifications.map((item, index) => (
                    <div
                        key={item.label}
                        className={`grid grid-cols-2 px-4 py-2.5 text-sm mx-1 ${
                            index % 2 === 0
                                ? "bg-gray-100"
                                : "bg-white rounded-md"
                        }`}
                    >
                        <span className="font-medium">{item.label}</span>

                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
