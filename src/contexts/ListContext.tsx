// Hooks: //
import { useCallback, useContext, useEffect, useMemo, useState } from "react";

// Utils: //
import { createContext } from "react";
import debounce from "lodash.debounce";
import { useRouter, useSearchParams } from "next/navigation";
import { ListContextProps, ProductData } from "@/common/types";
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

export const ListContext = createContext<ListContextProps | null>(null);

export const useListContext = () => {
  const context = useContext(ListContext);

  if (!context) {
    throw new Error("useListContext must be used within an ListProvider");
  }

  return context;
};

type Props = {
  children?: React.ReactNode;
  data: ProductData[];
};

export const ListProvider = ({ data, children }: Props) => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const specificCategory = searchParams.get("specificCategory") || "";

  const categoriesWithCount = useMemo(
    () =>
      Object.entries(
        data.reduce(
          (acc, item) => ({
            ...acc,
            [item.category]: (acc[item.category] || 0) + 1,
          }),
          {} as { [key: string]: number }
        )
      ),
    [data]
  );

  const [minPrice, maxPrice] = useMemo(
    () =>
      data.reduce(
        (acc, item) => [
          Math.min(acc[0], item.price),
          Math.max(acc[1], item.price),
        ],
        [0, 0]
      ),
    [data]
  );

  const [filterValues, setFilterValues] = useState<{
    price: { min: string | number; max: string | number };
    categories: string[];
  }>({
    price: {
      min: minPrice,
      max: maxPrice,
    },
    categories: categoriesWithCount.some((cat) =>
      cat.includes(specificCategory)
    )
      ? [specificCategory]
      : ([] as string[]),
  });

  const [priceSort, setPriceSort] = useState<"asc" | "desc" | null>(null);

  const [activeFilterOptions, setActiveFilterOptions] = useState(filterValues);

  const [currentPage, setCurrentPage] = useState(1);

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const handleDebouncedSearch = useCallback(
    debounce((searchTerm: string) => {
      setDebouncedSearchTerm(searchTerm);
      setCurrentPage(1);
    }, 300),
    []
  );

  const rows = useMemo(() => {
    let shallowData;

    if (priceSort) {
      shallowData = [...data].sort((a, b) =>
        priceSort == "desc" ? b.price - a.price : a.price - b.price
      );
    } else {
      shallowData = [...data];
    }

    if (activeFilterOptions.categories.length > 0) {
      shallowData = shallowData.filter((item) =>
        activeFilterOptions.categories.includes(item.category)
      );
    }

    const { min, max } = activeFilterOptions.price;

    if (Number(min) !== minPrice || Number(max) !== maxPrice) {
      shallowData = shallowData.filter(
        (item) => item.price >= Number(min) && item.price <= Number(max)
      );
    }

    if (debouncedSearchTerm) {
      shallowData = shallowData.filter(
        (item) =>
          item.name.toLowerCase().slice(0, debouncedSearchTerm.length) ==
          debouncedSearchTerm.toLowerCase()
      );
    }

    return shallowData;
  }, [
    data,
    activeFilterOptions,
    debouncedSearchTerm,
    priceSort,
    minPrice,
    maxPrice,
  ]);

  const visibleRows = rows.slice((currentPage - 1) * 10, currentPage * 10);

  useEffect(() => {
    if (specificCategory) {
      router.replace("/product-list");
    }
  }, []);

  const value = {
    data,
    rows,
    minPrice,
    maxPrice,
    filterValues,
    setFilterValues,
    priceSort,
    setPriceSort,
    activeFilterOptions,
    setActiveFilterOptions,
    currentPage,
    setCurrentPage,
    handleDebouncedSearch,
    visibleRows,
    categoriesWithCount,
  };
  return <ListContext.Provider value={value}>{children}</ListContext.Provider>;
};
