import LinkArrowBtn from "@/app/components/LinkArrowBtn";

function ModalPopup() {
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="hidden overflow-y-auto overflow-x-hidden fixed max-md:!pt-40 !top-0 right-0 left-0 z-[99] justify-center  !items-start md:!items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-gray-100 rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-600 dark:text-gray-400 bg-transparent hover:bg-gray-300 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>

            <span className="sr-only">Close modal</span>
          </button>

          <div className="p-4 md:p-5 text-center ">
            <svg
              className="mx-auto mb-4 text-gray-600 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <h3 className="mb-5 text-lg font-normal text-gray-800 dark:text-gray-400">
              This is an example of a modal element that would be shown to
              confirm the purchase of a real product.
            </h3>

            <div className="flex max-3xs:flex-col items-center gap-2 justify-center">
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
              >
                Ok
              </button>

              <LinkArrowBtn
                text="Product List"
                href="/product-list"
                className="flex items-center w-fit text-gray-800 bg-gray-100 hover:bg-gray-300/70 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-500 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                dataModalHide="popup-modal"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPopup;