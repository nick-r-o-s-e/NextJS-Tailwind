"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { snippet, snippetRef } from "@/common/types";
import { useTheme } from "@/contexts/ThemeContext";
import fetchCodeSnippets from "@/api/fetchCodeSnippets";
import TabBtn from "./TabBtn";
import SnippetControls from "./SnippetControls/SnippetControls";
import Highlighter from "./Highlighter";
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

type Props = {
  snippets: snippet[];
  snippetsRefs: snippetRef[];
  setSnippets: Dispatch<SetStateAction<snippet[] | null>>;
};

const timeoutsIds: ReturnType<typeof setTimeout>[] = [];

const clearTimeouts = () => {
  timeoutsIds.forEach((id) => clearTimeout(id));
};

function SnippetsSection({ snippets, snippetsRefs, setSnippets }: Props) {
  const theme = useTheme();

  const [activeSnippet, setActiveSnippet] = useState(snippets[0]);

  const [loading, setLoading] = useState(true);

  const [minHeight, setMinHeight] = useState(0);

  const refetchData = async () => {
    setLoading(true);

    const data = await fetchCodeSnippets(snippetsRefs);

    setSnippets(data);

    // ~~~ When data is refetching due to the theme or active snippet change,
    // ~~~ remove previous loading state updates.
    clearTimeouts();

    await new Promise((resolve) =>
      timeoutsIds.push(
        setTimeout(
          () => {
            setLoading(false);
            resolve;
          },
          activeSnippet.text == null ? 700 : 0
        )
      )
    );
  };

  const handleSnippetPick = (i: number) => {
    setLoading(true);

    setActiveSnippet(snippets[i]);
  };

  useEffect(() => {
    setLoading(true);
  }, [theme]);

  return (
    <section className="mb-4" id="code-snippets">
      <ul className="relative flex gap-2 mr-2 overflow-auto text-sm font-medium text-center text-gray-400  dark:border-gray-700 dark:text-gray-400 scrollbar-thin scrollbar-xs  scrollbar-corner-gray-200 dark:scrollbar-corner-gray-800  scrollbar-thumb-[#bcc1c7] scrollbar-track-gray-200 dark:scrollbar-thumb-slate-700 dark:scrollbar-track-gray-800">
        {snippets.map((snippet, i) => (
          <TabBtn
            key={`${snippet.filename + i}-snippet-tab-title`}
            name={snippet.filename}
            active={activeSnippet.id == snippet.id}
            onClick={() => {
              handleSnippetPick(i);
            }}
          />
        ))}
      </ul>

      <div className="relative rounded-lg overflow-hidden !rounded-tl-none">
        <SnippetControls
          minHeight={minHeight}
          setMinHeight={setMinHeight}
          snippets={snippets}
          activeSnippet={activeSnippet}
          handleSnippetPick={handleSnippetPick}
        />

        <Highlighter
          minHeight={minHeight}
          loading={loading}
          setLoading={setLoading}
          activeSnippet={activeSnippet}
          tag={activeSnippet.langTag}
          text={activeSnippet.text}
          refetchData={refetchData}
        />
      </div>
    </section>
  );
}

export default SnippetsSection;
