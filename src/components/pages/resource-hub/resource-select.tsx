import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ResourceSelect({
  resourceTypes,
  value,
  onValueChange,
}: {
  resourceTypes: {
    id: number;
    type: string;
    slug: string;
  }[];
  value: string;
  onValueChange: (value: string) => void;
}) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full md:w-fit justify-center mt-5 md:mt-0 shadow-none rounded-[4px] border-secondary focus-visible:ring-0 text-sm text-secondary">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all-resources">All Resources</SelectItem>
          {resourceTypes.map((item) => (
            <SelectItem key={item.slug} value={item.slug}>
              {item.type}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
