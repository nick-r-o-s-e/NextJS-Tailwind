type Props = {
  action: "Previous" | "Next";
};

function CarouselControlBtn({ action }: Props) {
  const side = action == "Previous" ? "left" : "right";

  return (
    <button
      type="button"
      className={`absolute top-0 ${side}-0 z-30 outline-none flex items-center justify-center h-full px-2 lg:px-4 cursor-pointer group`}
      {...{ [`data-carousel-${action == "Previous" ? "prev" : "next"}`]: true }}
    >
      <span className="inline-flex items-center justify-center w-6 h-6 lg:w-10 lg:h-10 rounded-full bg-gray-400/30 dark:bg-white/20 group-hover:bg-gray-400/60 dark:group-hover:bg-white/40 group-focus:ring-4 group-focus:ring-gray-200 dark:group-focus:ring-gray-700/70 group-focus:outline-none">
        <svg
          className="w-2 h-2 lg:w-4 lg:h-4 text-gray-800 dark:text-white rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={`${side == "left" ? "M5 1 1 5l4 4" : "m1 9 4-4-4-4"}`}
          />
        </svg>

        <span className="sr-only">{action}</span>
      </span>
    </button>
  );
}

export default CarouselControlBtn;
