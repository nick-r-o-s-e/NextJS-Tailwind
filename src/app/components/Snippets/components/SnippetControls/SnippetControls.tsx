import { Dispatch, useEffect, useRef, useState } from "react";
import { initDropdowns, initTooltips } from "flowbite";
import { snippet } from "@/common/types";
import CopyBtn from "./CopyBtn";
import Link from "next/link";

type Props = {
  activeSnippet: snippet;
  snippets: snippet[];
  handleSnippetPick: (i: number) => void;
  setMinHeight: Dispatch<React.SetStateAction<number>>;
  minHeight: number;
};

function SnippetControls({
  activeSnippet,
  snippets,
  handleSnippetPick,
  setMinHeight,
  minHeight,
}: Props) {
  useEffect(() => {
    initTooltips();
    initDropdowns();
  }, []);

  const fileListRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    setMinHeight((prevVal) => {
      const listHeight = fileListRef?.current?.offsetHeight;

      return prevVal ? prevVal : listHeight ? listHeight + 80 : 0;
    });
  });

  const [fileDropdownStyles, setFileDropdownStyles] = useState("opacity-0");

  useEffect(() => {
    minHeight && setFileDropdownStyles("hidden");
  }, [minHeight]);

  return (
    <div className="absolute w-[calc(100%-8px)] flex justify-between gap-2 z-30 right-[14px] top-0 pt-2 pb-1 pr-1 bg-[#fafafa] dark:bg-[#282c34] shadow-[rgba(250,250,250,1)_-5px_2px_2px_0px] dark:shadow-[rgba(40,44,52,1)_-5px_2px_2px_0px]">
      <span className="ml-4 h-fit rounded-lg text-gray-900 dark:text-gray-400/70 bg-[#efefef] dark:bg-[#333B49] px-2 py-1 text-xs uppercase">
        {activeSnippet.langTag}
      </span>

      <div className="flex gap-2">
        {activeSnippet.text && <CopyBtn content={activeSnippet.text} />}

        <button
          id="file-choose-dropdown-btn"
          data-dropdown-toggle="file-choose-dropdown"
          className={`${
            !minHeight && "opacity-0"
          } text-gray-900  bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-2.5 py-1 text-center inline-flex  whitespace-nowrap  items-center dark:bg-gray-600 dark:text-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-800`}
          type="button"
        >
          Choose File
          <svg
            className="w-2.5 h-2.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        <div
          id="file-choose-dropdown"
          className={`${fileDropdownStyles}  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
        >
          <ul
            ref={fileListRef}
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="file-choose-dropdown"
          >
            {snippets.map((snippet, i) => (
              <li key={`${snippet.filename + i}-snippet-dropdown-title`}>
                <a
                  className={`${
                    activeSnippet.id == snippet.id
                      ? "bg-gray-200 dark:bg-gray-500"
                      : "hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  } duration-150 cursor-pointer block px-4 py-2 `}
                  href="#code-snippets"
                  onClick={() => {
                    handleSnippetPick(i);
                  }}
                >
                  {snippet.filename}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Link href={activeSnippet.url} target="blank">
          <button
            type="button"
            data-tooltip-target="tooltip-source-code"
            data-tooltip-placement="bottom"
            className="relative text-gray-900  bg-gray-200 hover:bg-gray-300 focus:ring-4  focus:ring-gray-100  font-medium rounded-lg text-sm p-1 text-center inline-flex items-center dark:bg-gray-600 dark:text-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <div
              id="tooltip-source-code"
              role="tooltip"
              className="absolute z-10 invisible inline-block !top-10 !left-[100%] !translate-x-[-100%] !translate-y-0 w-max px-3 py-[0.3rem] text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-200 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600"
            >
              See on GitHub
            </div>
            <svg
              className="w-[1.5rem] h-[1.5rem] text-gray-800 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="sr-only">GitHub Source Code</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SnippetControls;
