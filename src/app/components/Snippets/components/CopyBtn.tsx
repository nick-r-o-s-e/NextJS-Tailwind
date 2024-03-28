import { initTooltips } from "flowbite";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

type Props = {
  content: string;
};

function CopyBtn({ content }: Props) {
  const [copyTip, setCopyTip] = useState<"Copy code" | "Copied">("Copy code");

  useEffect(() => {
    initTooltips();
  }, []);

  return (
    <button
      data-tooltip-target="tooltip-copy-snippet"
      data-tooltip-placement="left"
      className="duration-100 text-gray-400 hover:text-blue-600 dark:text-gray-500  dark:hover:text-blue-700  font-medium rounded-lg text-xs  text-center inline-flex items-center  "
      data-tip={copyTip}
    >
      <div
        id="tooltip-copy-snippet"
        role="tooltip"
        className="absolute z-10 invisible inline-block  w-max px-3 py-[0.3rem] text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-200 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-600"
      >
        {copyTip}
      </div>

      <CopyToClipboard
        text={content}
        onCopy={async () => {
          setCopyTip("Copied");
          await new Promise((resolve) => setTimeout(resolve, 1500));
          setCopyTip(`Copy code`);
        }}
      >
        {copyTip == "Copied" ? (
          <svg
            className="w-6 h-6 p-0.5 animate-appear text-green-500 duration-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6  animate-appear duration-150"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m7.708 2.292.706-.706A2 2 0 0 1 9.828 1h6.239A.97.97 0 0 1 17 2v12a.97.97 0 0 1-.933 1H15M6 5v4a1 1 0 0 1-1 1H1m11-4v12a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V9.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 5h5.239A.97.97 0 0 1 12 6Z"
            />
          </svg>
        )}
      </CopyToClipboard>
    </button>
  );
}

export default CopyBtn;
