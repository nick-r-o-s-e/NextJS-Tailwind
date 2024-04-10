import React from "react";
import RefreshBtn from "../../Buttons/RefreshBtn";
import LinkArrowBtn from "../../Buttons/LinkArrowBtn";

type Props = {
  handleRefresh: () => Promise<void>;
  sourceUrl: string;
};

function ErrMsg({ sourceUrl, handleRefresh }: Props) {
  return (
    <div className="absolute z-30 w-full h-fit top-[20%] px-6 text-center left-0 flex flex-col gap-8 items-center">
      <h2 className="text-3xl font-bold text-slate-700  dark:text-slate-300 ">
        Failed to fetch source code...
      </h2>

      <RefreshBtn
        onClick={handleRefresh}
        sizeClasses="w-9 h-9 md:w-12 md:h-12"
      />

      <LinkArrowBtn text="See on GitHub" target="_blank" href={sourceUrl} />
    </div>
  );
}

export default ErrMsg;
