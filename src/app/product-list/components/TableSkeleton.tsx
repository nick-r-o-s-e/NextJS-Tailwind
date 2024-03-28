import React from "react";

function TableSkeleton() {
  return (
    <div className="mx-auto max-w-screen-xl lg:px-12">
      <div
        role="status"
        className="w-full divide-gray-200 dark:divide-gray-700 border bg-gray-200 dark:bg-gray-800/60 border-gray-400 divide-y  rounded-lg shadow animate-pulse   dark:border-gray-700"
      >
        <div className="flex p-4 flex-col gap-5 lg:flex-row lg:justify-between">
          <div className="w-full lg:max-w-[511px] h-[40px] rounded-lg bg-gray-300  dark:bg-gray-500"></div>

          <div className="w-full flex flex-col lg:flex-row gap-2">
            <div className="w-full lg:justify-end  flex gap-3">
              <div className="w-[50%] h-[40px] lg:max-w-[118px] rounded-lg bg-gray-300  dark:bg-gray-700"></div>

              <div className="w-[50%] h-[40px] lg:max-w-[118px] rounded-lg bg-gray-300  dark:bg-gray-700"></div>
            </div>

            <div className="w-full h-[40px] lg:max-w-[74px] rounded-lg bg-gray-400/70  dark:bg-gray-700"></div>
          </div>
        </div>

        <div className="flex gap-4 items-center px-4 justify-between h-[47px] bg-gray-400/70  dark:bg-gray-600">
          <div className=" w-28 h-2.5 bg-gray-300 rounded-full dark:bg-gray-800 "></div>

          <div className="w-24  h-2.5 bg-gray-300 rounded-full dark:bg-gray-800"></div>

          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-800 w-12"></div>
        </div>

        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="flex gap-4 items-center px-4 justify-between h-[48.75px] bg-gray-300 dark:bg-gray-800"
          >
            <div className=" w-28 h-2 bg-gray-400 rounded-full dark:bg-gray-600 "></div>

            <div className="w-24  h-2 bg-gray-400 rounded-full dark:bg-gray-600"></div>

            <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-600 w-12"></div>
          </div>
        ))}

        <div className="flex p-4 flex-col md:flex-row md:justify-between gap-3 items-center w-full ">
          <div className="h-[19px] w-[130px] rounded-lg bg-gray-300  dark:bg-gray-600"></div>

          <div className="h-[35px] w-[165px] rounded-lg  bg-gray-400/70  dark:bg-gray-700"></div>
        </div>

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default TableSkeleton;
