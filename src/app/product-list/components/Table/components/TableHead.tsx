import { useListContext } from "@/contexts/ListContext";

function TableHead() {
  const { priceSort, setPriceSort } = useListContext();

  const handlePriceSort = () => {
    setPriceSort((prevVal) =>
      !prevVal ? "asc" : prevVal == "asc" ? "desc" : null
    );
  };

  return (
    <thead className="text-xs text-gray-700 uppercase bg-[#dbe0e6] dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col"></th>

        <th scope="col" className="px-2 xs:px-4 py-3">
          Product name
        </th>

        <th scope="col" className="px-2 xs:px-4 py-3">
          Category
        </th>

        <th scope="col" className="px-2 xs:px-4 py-3">
          <div
            className="flex items-center cursor-pointer w-fit "
            onClick={handlePriceSort}
          >
            Price
            <div className="relative">
              {priceSort && (
                <span
                  className={`absolute w-full ${
                    priceSort == "asc" ? "top" : "bottom"
                  }-0 h-[50%] opacity-75 bg-[#dbe0e6] dark:bg-gray-700`}
                ></span>
              )}

              <svg
                className="w-4 h-4 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
              </svg>
            </div>
          </div>
        </th>
      </tr>
    </thead>
  );
}

export default TableHead;
