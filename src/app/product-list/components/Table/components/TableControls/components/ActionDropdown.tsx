import { initDropdowns } from "flowbite";
import { useEffect } from "react";

type Props = {
  iconViewBox: string;
  iconPathD: string;
  activeIndicator: boolean;
  id: string;
  name: string;
  activeIndicatorVal: number | null;
};

function ActionDropdownBtn({
  activeIndicator,
  name,
  id,
  activeIndicatorVal,
  iconPathD,
  iconViewBox,
}: Props) {
  useEffect(() => {
    initDropdowns();
  }, []);

  return (
    <button
      id={`${id}Button`}
      data-dropdown-toggle={id}
      className="relative w-full lg:w-auto !m-0 flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg border border-gray-400/70 hover:bg-gray-200 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      type="button"
    >
      <svg
        className="h-4 w-4 mr-2 text-gray-600 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox={iconViewBox}
      >
        <path
          d={iconPathD}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>

      {name}

      <svg
        className="-mr-1 ml-1.5 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          clipRule="evenodd"
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        />
      </svg>

      {activeIndicator && (
        <div
          className={`absolute animate-appear inline-flex items-center justify-center w-6 h-6 text-x${
            activeIndicatorVal ? "s" : "l"
          }  font-bold text-white bg-red-500 border-2 border-gray-100 rounded-full -top-2 -end-2 dark:border-gray-800`}
        >
          {activeIndicatorVal || (
            <div className="w-[30%] h-[30%] bg-white rounded-[50%]"></div>
          )}
        </div>
      )}
    </button>
  );
}

export default ActionDropdownBtn;
