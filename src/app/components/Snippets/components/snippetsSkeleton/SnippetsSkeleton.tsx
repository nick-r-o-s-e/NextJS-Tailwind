import ContentSkeleton from "./ContentSkeleton";

function SnippetsSkeleton() {
  return (
    <div className="flex animate-pulse flex-col min-h-[247px] justify-between  p-5 border bg-gray-200 dark:bg-gray-800/60  border-gray-400 rounded-lg shadow  dark:border-gray-700">
      <div className="w-full flex h-8 mb-6 gap-4 justify-between">
        <div className="h-full w-36  max-w-full    bg-gray-300 rounded-md dark:bg-gray-600"></div>

        <div className="gap-2 h-full flex w-fit">
          <div className="h-full w-8  max-w-full    bg-gray-400/60 rounded-md dark:bg-gray-700"></div>
          <div className="h-full w-24  max-w-full    bg-gray-400/60 rounded-md dark:bg-gray-700"></div>
          <div className="h-full w-8  max-w-full    bg-gray-400/60 rounded-md dark:bg-gray-700"></div>
        </div>
      </div>

      <ContentSkeleton/>
    </div>
  );
}

export default SnippetsSkeleton;
