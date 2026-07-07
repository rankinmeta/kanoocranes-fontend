import { type FilterState } from "@/context/filter-context";
import { buildCraneQuery } from "@/data/filter-query";
import api from "../lib/axios";

export async function getCraneModels(filters: FilterState) {
	const query = buildCraneQuery(filters);

	const { data } = await api.get(`/models?${query}`);

	return data;
}
