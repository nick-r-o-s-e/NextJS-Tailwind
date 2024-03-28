import { ChangeEventHandler, useState } from "react";

type Props = {
  isFav: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  sizeStyles: string;
};

function HeartCheckbox({ isFav, onChange, sizeStyles }: Props) {
  return (
    <div className="relative flex items-center h-fit">
      <input
        id="checkbox-table-search-1"
        type="checkbox"
        checked={isFav}
        onChange={onChange}
        className={`${sizeStyles} cursor-pointer peer opacity-0 relative appearance-none shrink-0 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
      ></input>

      <svg
        className={`${sizeStyles} absolute overflow-hidden w-4 h-4 cursor-pointer pointer-events-none stroke-gray-400/70 dark:stroke-gray-600 fill-gray-200 dark:fill-gray-700 peer-checked:!stroke-red-600 peer-checked:!fill-red-500 mt-[2px]`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </div>
  );
}

export default HeartCheckbox;
