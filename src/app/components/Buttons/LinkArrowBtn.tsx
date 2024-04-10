import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

type Props = {
  text: string;
  href: string;
  target?: HTMLAttributeAnchorTarget | undefined;
  dataModalHide?: string;
};

function LinkArrowBtn({ href, dataModalHide, text, target }: Props) {
  return (
    <Link
      type="button"
      target={target || "_self"}
      href={href}
      className="inline-flex justify-center items-center py-2.5 px-5 text-sm sm:text-base font-medium text-center duration-200 text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
      data-modal-hide={dataModalHide}
    >
      {text}
      <svg
        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </Link>
  );
}

export default LinkArrowBtn;
