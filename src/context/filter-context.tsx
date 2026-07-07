"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type FilterState = {
  craneTypes: string[];
  liftingCapacity: string[];
  workingRadius: string[];
  projectTypes: string[];
  manufacturers: string[];
  availability: string;
  sortBy: string;
};

const initialFilters: FilterState = {
  craneTypes: [],
  liftingCapacity: [],
  workingRadius: [],
  projectTypes: [],
  manufacturers: [],
  availability: "both",
  sortBy: "",
};

type FilterContextType = {
  draftFilters: FilterState;
  appliedFilters: FilterState;

  toggleFilter: (
    key: Exclude<keyof FilterState, "sortBy" | "availability">,
    value: string,
  ) => void;
  setSortBy: (value: string) => void;
  selectAvailability: (value: string) => void;
  resetFilters: () => void;
  applyFilters: () => void;
};

const FilterContext = createContext<FilterContextType | null>(null);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [draftFilters, setDraftFilters] = useState(initialFilters);

  const [appliedFilters, setAppliedFilters] = useState(initialFilters);

  const toggleFilter = (
    key: Exclude<keyof FilterState, "sortBy" | "availability">,
    value: string,
  ) => {
    setDraftFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const selectAvailability = (value: string) => {
    setDraftFilters((prev) => ({
      ...prev,
      availability: value,
    }));
  };

  const setSortBy = (value: string) => {
    setDraftFilters((prev) => ({
      ...prev,
      sortBy: prev.sortBy === value ? "" : value,
    }));
  };

  const applyFilters = () => {
    setAppliedFilters(draftFilters);
  };

  const resetFilters = () => {
    setDraftFilters(initialFilters);
    setAppliedFilters(initialFilters);
  };

  return (
    <FilterContext.Provider
      value={{
        appliedFilters,
        draftFilters,
        toggleFilter,
        selectAvailability,
        setSortBy,
        resetFilters,
        applyFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilters must be used inside a FilterProvider");
  }

  return context;
};
