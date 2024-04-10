import { Dispatch, useEffect, useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { snippet } from "@/common/types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ContentSkeleton from "./snippetsSkeleton/ContentSkeleton";
import ErrMsg from "./ErrMsg";

type Props = {
  activeSnippet: snippet;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  tag: string;
  text: string | null;
  minHeight: number;
  refetchData: () => Promise<void>;
};

function Highlighter({
  tag,
  text,
  activeSnippet,
  setLoading,
  loading,
  minHeight,
  refetchData,
}: Props) {
  const { snippetTheme } = useTheme();

  const [theme, setTheme] = useState<{
    [key: string]: React.CSSProperties;
  } | null>(snippetTheme);

  useEffect(() => {
    loading ? setTheme(null) : setTheme(snippetTheme);
  }, [loading]);

  const err = activeSnippet.text == null;

  useEffect(() => {
    !err && activeSnippet.text == text && setLoading(false);
  });

  useEffect(() => {
    err && refetchData();
  }, [err, activeSnippet, snippetTheme]);

  const contentSkeletonRef = useRef<HTMLDivElement | null>(null);

  return loading || !theme ? (
    <div
      ref={contentSkeletonRef}
      className="w-full bg-[#fafafa] dark:bg-[#282c34] pl-4 pb-4 pt-[3rem] !rounded-none"
      style={{ minHeight: minHeight }}
    >
      <div className="w-full animate-pulse">
        <ContentSkeleton />
      </div>
    </div>
  ) : (
    <div className="relative z-20">
      <SyntaxHighlighter
        language={tag}
        style={theme}
        className="max-h-[700px]  text-[0.6rem] 2xs:text-[0.73rem] lg:text-base !rounded-none scrollbar-thin scrollbar-corner-gray-200 dark:scrollbar-corner-gray-800 scrollbar-thumb-[#bcc1c7] scrollbar-track-gray-200 dark:scrollbar-thumb-slate-700 dark:scrollbar-track-gray-800 overflow-auto"
        customStyle={{
          minHeight: Math.max(
            contentSkeletonRef.current?.offsetHeight || 0,
            minHeight
          ),
          paddingTop: "2.8rem",
          paddingBottom: "0.6rem",
          margin: "0",
        }}
        showLineNumbers={true}
      >
        {text || ""}
      </SyntaxHighlighter>
      {err && (
        <ErrMsg handleRefresh={refetchData} sourceUrl={activeSnippet.url} />
      )}
    </div>
  );
}

export default Highlighter;
