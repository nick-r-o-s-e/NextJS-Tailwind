import { DebouncedFunc } from "lodash";
import { Dispatch, SVGProps, SetStateAction } from "react";

export type ProductData = {
  id: string | number;
  name: string;
  price: number;
  currency: string;
  category: string;
  description: string;
};

export type ListData = {
  products: ProductData[];
};

export type sidebarNav = {
  path: string;
  name: string;
  iconAttrs: {
    svgAttrs: SVGProps<SVGSVGElement>;
    pathAttrs: SVGProps<SVGPathElement>;
  };
};

export type ThemeContextProps = {
  mode: "light" | "dark" | null;
  toggleTheme: () => void;
};

export type FilterValues = {
  price: {
    min: string | number;
    max: string | number;
  };
  categories: string[];
};

export type ListContextProps = {
  data: ProductData[];
  rows: ProductData[];
  minPrice: number;
  maxPrice: number;
  filterValues: FilterValues;
  setFilterValues: Dispatch<SetStateAction<FilterValues>>;
  priceSort: "asc" | "desc" | null;
  setPriceSort: Dispatch<SetStateAction<"asc" | "desc" | null>>;
  activeFilterOptions: FilterValues;
  setActiveFilterOptions: Dispatch<SetStateAction<FilterValues>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  handleDebouncedSearch: DebouncedFunc<(searchTerm: string) => void>;
  visibleRows: ProductData[];
  categoriesWithCount: [string, number][];
};

export type snippetRef = {
  filename: string;
  url: string;
  langTag: string;
};

export type snippet = {
  filename: string;
  text: string | null;
  langTag: string;
  url: string;
  id: number;
};
