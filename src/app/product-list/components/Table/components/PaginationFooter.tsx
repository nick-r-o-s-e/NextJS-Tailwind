import { useListContext } from "@/contexts/ListContext";
import { useMemo } from "react";

function PaginationFooter() {
  const { rows, setCurrentPage, visibleRows, currentPage } = useListContext();

  const pagesCount = useMemo(
    () => Math.floor(rows.length / 10) + (rows.length % 10 !== 0 ? 1 : 0),
    [rows]
  );

  const paginationValues = useMemo(() => {
    if (pagesCount == 0) {
      return [1];
    }

    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    const { length } = pages;

    const pageIndex = pages.indexOf(currentPage);
    if (length <= 5) {
      return pages;
    } else if (pageIndex >= length - 3) {
      return [pages[0], null, ...pages.slice(length - 3)];
    } else {
      return [
        ...pages.slice(Math.max(pageIndex - 2, 0), Math.max(pageIndex + 1, 3)),
        null,
        pages.at(-1),
      ];
    }
  }, [pagesCount, currentPage, rows]);

  return (
    <nav
      className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 p-4"
      aria-label="Table navigation"
    >
      <span className="flex gap-1 text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing
        <span className="font-semibold text-gray-900 dark:text-white">
          {!visibleRows.length
            ? 0
            : `${currentPage * 10 - 9}-${
                (currentPage - 1) * 10 + visibleRows.length
              }`}
        </span>
        {visibleRows.length !== 0 && (
          <>
            of
            <span className="font-semibold text-gray-900 dark:text-white">
              {rows.length}
            </span>
          </>
        )}
      </span>

      <ul className="inline-flex items-stretch -space-x-px">
        <li>
          <button
            disabled={!(currentPage - 1)}
            onClick={() => {
              setCurrentPage((prevVal) => Math.max(1, prevVal - 1));
            }}
            className="flex dark:disabled:!bg-gray-800 dark:disabled:!text-gray-600 disabled:!bg-gray-100 disabled:!text-gray-300 disabled:!cursor-auto items-center justify-center h-full cursor-pointer py-1.5 px-3 ml-0 text-gray-600/70 bg-gray-100 rounded-l-lg border border-gray-300 hover:bg-gray-300/40 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700/50 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>

            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>

        {paginationValues.map((page, i, arr) => (
          <li key={i}>
            <div
              onClick={() => {
                let targetPage;

                if (!page) {
                  targetPage = arr[2]! - (i == 1 ? 1 : -1);
                } else {
                  targetPage = page;
                }
                setCurrentPage(targetPage);
              }}
              className={`flex items-center justify-center text-sm py-2 px-3 leading-tight border-gray-300 dark:border-gray-700 ${
                page == currentPage
                  ? "text-black  bg-gray-300/70 border dark:bg-gray-700 dark:text-white"
                  : "cursor-pointer text-gray-500 bg-gray-100 border hover:bg-gray-300/40 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700/50 dark:hover:text-white"
              }`}
            >
              {page || "..."}
            </div>
          </li>
        ))}

        <li>
          <button
            disabled={!pagesCount || currentPage == pagesCount}
            onClick={() => {
              setCurrentPage((prevVal) => Math.min(pagesCount, prevVal + 1));
            }}
            className="flex dark:disabled:!bg-gray-800 dark:disabled:!text-gray-600 disabled:!bg-gray-100 disabled:!text-gray-300 disabled:!cursor-auto items-center justify-center h-full cursor-pointer py-1.5 px-3 leading-tight text-gray-600/70 bg-gray-100 rounded-r-lg border border-gray-300 hover:bg-gray-300/40 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700/50 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>

            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default PaginationFooter;
