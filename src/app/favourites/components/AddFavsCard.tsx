import LinkArrowBtn from "@/app/components/LinkArrowBtn";

function AddFavsCard() {
  return (
    <div className="mx-auto flex justify-center max-w-screen-xl lg:px-12">
      <div className="max-w-[740px] flex flex-col items-baseline text-start bg-gray-100 dark:bg-gray-800 border border-gray-400/70 shadow-lg dark:border-gray-700 rounded-lg p-8 xl:p-10">
        <div className="bg-blue-200 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
          <svg
            className="w-2.5 h-2.5 me-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          Info
        </div>

        <h1 className="text-gray-900 dark:text-white text-4xl sm:text-5xl font-extrabold mb-3">
          Find your favourites now!
        </h1>

        <p className="text-lg font-normal text-gray-700 dark:text-gray-400 mb-6">
          You have not yet added any product to your favourite list, you can do
          it by visiting the products list.
        </p>

        <LinkArrowBtn
          text="See Product List"
          href="/product-list"
          className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        />
      </div>
    </div>
  );
}

export default AddFavsCard;
