import { snippet } from "@/common/types";
import { useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import ContentSkeleton from "./snippetsSkeleton/ContentSkeleton";

type Props = {
  activeSnippet: snippet;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  tag: string;
  theme: {
    [key: string]: React.CSSProperties;
  };
  text: string | null;
};

function Highlighter({
  tag,
  theme,
  text,
  activeSnippet,
  setLoading,
  loading,
}: Props) {
  useEffect(() => {
    activeSnippet.text == text && setLoading(false);
  });

  return loading ? (
    <div className="w-full bg-[#fafafa] dark:bg-[#282c34] pl-4 pb-4 pt-[3rem] !rounded-none">
      <div className="w-full animate-pulse">
        <ContentSkeleton />
      </div>
    </div>
  ) : (
    <SyntaxHighlighter
      language={tag}
      style={theme}
      className="max-h-[700px] min-h-[200px] text-xs 2xs:text-sm lg:text-base !rounded-none scrollbar-thin scrollbar-corner-gray-200 dark:scrollbar-corner-gray-800 scrollbar-thumb-[#bcc1c7] scrollbar-track-gray-200 dark:scrollbar-thumb-slate-700 dark:scrollbar-track-gray-800 overflow-auto"
      customStyle={{
        paddingTop: "2.7rem",
        paddingBottom: "0.6rem",
        margin: "0",
      }}
      showLineNumbers={true}
    >
      {text || "Failed to fetch source code..."}
    </SyntaxHighlighter>
  );
}

export default Highlighter;
