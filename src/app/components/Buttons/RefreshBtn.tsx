import React from "react";

type Props = {
  onClick: () => Promise<void>;
  sizeClasses: string;
};

function RefreshBtn({ onClick, sizeClasses }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white w-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg p-1 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg
        className={`${sizeClasses} dark:text-white`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
        />
      </svg>

      <span className="sr-only">Refetch Data</span>
    </button>
  );
}

export default RefreshBtn;
