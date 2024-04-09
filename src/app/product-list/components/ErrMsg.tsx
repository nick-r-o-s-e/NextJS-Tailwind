import RefreshBtn from "@/app/components/Buttons/RefreshBtn";

type Props = {
  refetchData: () => Promise<void>;
};

function ErrMsg({ refetchData }: Props) {
  return (
    <div className="absolute w-max max-w-[80%] left-[50%] translate-x-[-50%] top-[20%] rounded-[50%] flex flex-col text-center py-4 md:py-9 px-4 justify-center items-center gap-7 shadow-[0_0_55px_85px_rgb(209,213,219)] dark:shadow-[0_0_55px_85px_rgb(31,41,55)] bg-[#d1d5db] dark:bg-[#1f2937] border-none">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-700  dark:text-slate-300/90 ">
        Failed to fetch data...
      </h2>

      <RefreshBtn onClick={refetchData} sizeClasses="w-9 h-9 md:w-12 md:h-12" />
    </div>
  );
}

export default ErrMsg;
