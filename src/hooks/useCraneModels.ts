import { useQuery } from "@tanstack/react-query";
import { getCraneModels } from "@/services/crane.service";
import { useFilters } from "@/context/filter-context";

export function useCraneModels() {
  const { appliedFilters } = useFilters();

  return useQuery({
    queryKey: ["crane-models", appliedFilters],
    queryFn: () => getCraneModels(appliedFilters),
    staleTime: 1000 * 60,
  });
}
