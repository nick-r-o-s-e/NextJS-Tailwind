import React from "react";
import LinkArrowBtn from "./Buttons/LinkArrowBtn";

type Props = {
  errMsg: string;
};

function ErrCard({ errMsg }: Props) {
  return (
    <div className="mx-auto flex justify-center max-w-screen-xl lg:px-12">
      <div className="max-w-[740px] flex flex-col items-baseline text-start bg-gray-100 dark:bg-gray-800 border border-gray-400/70 shadow-lg dark:border-gray-700 rounded-lg p-8 xl:p-10">
        <div className="bg-red-200 text-red-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-red-400 mb-2">
          <svg
            className="w-2.5 h-2.5 me-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          Error
        </div>

        <h1 className="text-gray-900 dark:text-white text-4xl sm:text-5xl font-extrabold mb-3">
          Ooops, something went wrong...
        </h1>

        <p className="text-lg font-normal text-gray-700 dark:text-gray-400 mb-6">
          {errMsg}
        </p>

        <div className="w-full flex flex-col items-center  xs:flex-row gap-4">
          <LinkArrowBtn text="See on GitHub" href="/product-list" />

          <LinkArrowBtn text="See Product List" href="/product-list" />
        </div>
      </div>
    </div>
  );
}

export default ErrCard;
