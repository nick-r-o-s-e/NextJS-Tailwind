function loading() {
  return (
    <div className="animate-pulse flex flex-col gap-3 lg:gap-6 items-center justify-start border w-full max-w-[480px] lg:max-w-[800px] pb-4 pt-5 lg:py-7 px-[2.5rem] lg:px-[4.5rem] mx-auto  rounded-lg shadow bg-gray-200  dark:bg-gray-800  border-gray-400 dark:border-gray-700">
      <div className="h-[60px] lg:h-[90px] w-[80%] bg-gray-300 rounded-md dark:bg-gray-600"></div>

      <div className="h-[20px] lg:h-[40px] w-[40%] xs:self-start      bg-gray-300 rounded-md dark:bg-gray-700"></div>

      <div className="flex gap-3 max-xs:justify-center max-xs:flex-wrap w-full justify-between">
        <div className="flex  max-xs:items-center self-start items-start xs:pl-2 w-full flex-col gap-2">
          <div className="h-[12px] lg:h-[20px] w-[70%]    bg-gray-400 rounded-md dark:bg-gray-700"></div>

          <div className="h-[12px] lg:h-[20px] w-[50%]    bg-gray-400 rounded-md dark:bg-gray-700"></div>

          <div className="h-[12px] lg:h-[20px] w-[60%]    bg-gray-400 rounded-md dark:bg-gray-700"></div>
        </div>

        <div className="h-[60px] lg:h-[120px] w-[75%]   bg-gray-300 rounded-md dark:bg-gray-600"></div>
      </div>
    </div>
  );
}

export default loading;
