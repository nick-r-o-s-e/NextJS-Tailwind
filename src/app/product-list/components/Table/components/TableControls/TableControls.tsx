import { useEffect, useRef } from "react";
import SearchInput from "./components/SearchInput";
import ActionDropdownBtn from "./components/ActionDropdown";
import CurrencyInput from "react-currency-input-field";
import RangeSlider from "./components/RangeSlider";
import { useListContext } from "@/contexts/ListContext";
import { initDropdowns } from "flowbite";
import { isMobile } from "react-device-detect";

function TableControls() {
  const {
    minPrice,
    maxPrice,
    activeFilterOptions,
    filterValues,
    setFilterValues,
    setActiveFilterOptions,
    setCurrentPage,
    categoriesWithCount,
  } = useListContext();

  const minPriceRef = useRef<HTMLInputElement | null>(null);

  const maxPriceRef = useRef<HTMLInputElement | null>(null);

  const applyFilters = () => {
    const val = { ...filterValues };

    const { min, max } = { ...val.price };

    if (val.categories.length == categoriesWithCount.length) {
      val.categories = [];
    }

    val.price = {
      min: !Number(min) ? minPrice : Number(min).toFixed(2),
      max: !Number(max) ? maxPrice : Number(max).toFixed(2),
    };

    setFilterValues(val);

    setActiveFilterOptions(val);

    setCurrentPage(1);
  };

  const handleCategoryPick = (target: EventTarget & HTMLInputElement) => {
    let categories = [...filterValues.categories];

    const targetCategory = target.id;

    if (target.checked) {
      categories.push(targetCategory);
    } else {
      const index = categories.indexOf(targetCategory);

      index !== -1 && categories.splice(index, 1);
    }

    setFilterValues((prevVal) => ({
      ...prevVal,
      categories,
    }));
  };

  const updateFilterPriceValues = (
    target: "min" | "max",
    val: number | string
  ) => {
    let value = Number(val);

    const { min, max } = filterValues.price;

    let newPrice = { ...filterValues.price };

    if (["", "-", "."].includes(String(val))) {
      newPrice[target] = val;

      target == "max" && (newPrice.min = minPrice);
    } else {
      if (target == "min") {
        if (value >= Number(max)) {
          newPrice.max = maxPrice;
          newPrice.min = Math.min(value, maxPrice - 0.01);
        } else {
          newPrice.min = val;
        }
      } else {
        if (value <= Number(min)) {
          newPrice.min = minPrice;
          newPrice.max = val;
        } else {
          newPrice.max = value > maxPrice ? maxPrice : val;
        }
      }
    }

    setFilterValues((prevVal) => ({
      ...prevVal,
      price: newPrice,
    }));
  };

  useEffect(() => {
    initDropdowns();
  }, []);

  useEffect(() => {
    const { min, max } = filterValues.price;

    const [minLength, maxLength] = [String(min).length, String(max).length];

    //~~~ In case when a value is auto changed due to range limit, move the cursor to the end ~~~//
    if (String(maxPrice).length == maxLength) {
      maxPriceRef.current?.setSelectionRange(maxLength, maxLength);
    }

    if (String(Number(maxPrice) - 0.01).length == minLength) {
      minPriceRef.current?.setSelectionRange(minLength, minLength);
    }
  }, [filterValues, maxPrice]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between space-y-3 lg:space-y-0 lg:space-x-4 p-4">
      <SearchInput />

      <div className="w-full lg:w-auto flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-stretch lg:items-center justify-end lg:space-x-3 flex-shrink-0">
        <div className="flex max-2xs:flex-col gap-3 items-center justify-center space-x-3 w-full lg:w-auto">
          <ActionDropdownBtn
            id="priceDropdown"
            name="Price"
            iconViewBox="0 0 14 18"
            iconPathD="M1 7h9.231M1 11h9.231M13 2.086A5.95 5.95 0 0 0 9.615 1C5.877 1 2.846 4.582 2.846 9s3.031 8 6.769 8A5.94 5.94 0 0 0 13 15.916"
            activeIndicator={Object.values(activeFilterOptions.price).some(
              (val) => Number(val) > minPrice && Number(val) < maxPrice
            )}
            activeIndicatorVal={null}
          />

          <div
            id="priceDropdown"
            className="hidden p-4 z-10  mr-4 !w-[calc(100%-2rem)] !max-w-[300px] max-lg:!translate-x-4 max-lg:!translate-y-[129px] bg-white rounded  shadow dark:bg-gray-700 "
          >
            <div className="flex pt-2 w-full gap-5 flex-col items-center">
              <RangeSlider
                min={minPrice}
                max={maxPrice}
                filterPrice={filterValues.price}
                updateFilterPrice={updateFilterPriceValues}
              />
              <div className="flex items-center max-3xs:flex-col justify-between w-full gap-4">
                {isMobile ? (
                  <>
                    {" "}
                    <p className="text-slate-700 dark:text-slate-300  flex-nowrap ">
                      From:{" "}
                      <span className="text-black dark:text-white font-semibold">
                        {filterValues.price.min}
                      </span>{" "}
                      <span className="text-xs">EUR</span>
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 flex-nowrap text-md">
                      To:{" "}
                      <span className="text-black dark:text-white text-sm inline-block font-semibold">
                        {filterValues.price.max}
                      </span>{" "}
                      <span className="text-xs">EUR</span>
                    </p>
                  </>
                ) : (
                  <>
                    <div>
                      <label
                        htmlFor="input-min-price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        From:
                      </label>

                      <CurrencyInput
                        id="input-min-price"
                        onBlur={(e) => {
                          [".", "-", ""].includes(e.target.value) &&
                            updateFilterPriceValues("min", minPrice);
                        }}
                        allowNegativeValue={false}
                        placeholder={String(minPrice)}
                        ref={minPriceRef}
                        value={filterValues.price.min}
                        onChange={(e) => {
                          e.preventDefault();
                        }}
                        onFocus={(e) => {
                          e.preventDefault();
                        }}
                        className="bg-gray-50 border border-gray-300 max-w-[125px] text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800/60 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onValueChange={(value) => {
                          updateFilterPriceValues("min", value || "");
                        }}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="input-max-price"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        To:
                      </label>
                      <CurrencyInput
                        id="input-max-price"
                        onBlur={(e) => {
                          [".", "-", ""].includes(e.target.value) &&
                            updateFilterPriceValues("max", maxPrice);
                        }}
                        allowNegativeValue={false}
                        placeholder={String(maxPrice)}
                        ref={maxPriceRef}
                        value={filterValues.price.max}
                        onChange={(e) => {
                          e.preventDefault();
                        }}
                        onFocus={(e) => {
                          e.preventDefault();
                        }}
                        className="bg-gray-50 border border-gray-300 max-w-[125px] text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800/60 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onValueChange={(value) => {
                          updateFilterPriceValues("max", value || "");
                        }}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <ActionDropdownBtn
            id="filterDropdown"
            name="Filter"
            iconViewBox="0 0 20 20"
            iconPathD="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
            activeIndicator={activeFilterOptions.categories.length > 0}
            activeIndicatorVal={activeFilterOptions.categories.length}
          />

          <div
            id="filterDropdown"
            className="z-10 hidden w-fit min-w-[170px]  md:!min-w-[200px] p-3 bg-white rounded-lg shadow dark:bg-gray-700"
          >
            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Choose category
            </h6>
            <ul
              className="space-y-2 text-sm"
              aria-labelledby="filterDropdownButton"
            >
              {categoriesWithCount.map(([category, count]) => (
                <li key={category} className="flex items-center">
                  <input
                    id={category}
                    type="checkbox"
                    checked={filterValues.categories.includes(category)}
                    onChange={(e) => {
                      handleCategoryPick(e.target);
                    }}
                    className="w-4 h-4 bg-gray-100 border-gray-300 cursor-pointer rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  ></input>
                  <label
                    htmlFor={category}
                    className="pl-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-gray-100"
                  >
                    {category} ({count})
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          onClick={applyFilters}
          type="button"
          className="flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default TableControls;
