"use client";

// Components: //
import TabBtn from "./TabBtn";

// Highlight: //
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "highlight.js/styles/atom-one-dark.css";

// Utils, Hooks: //
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import SnippetControls from "./SnippetControls";
import { snippet } from "@/common/types";
import Highlighter from "./Highlighter";
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

type Props = {
  snippets: snippet[];
};
 
function CodeSnippetsComponent({ snippets }: Props) {
  const { mode } = useTheme();

  const theme = mode == "dark" ? oneDark : oneLight;

  const [activeSnippet, setActiveSnippet] = useState(snippets[0]);

  const [loading, setLoading] = useState(true);

  const handleSnippetPick = (i: number) => {
    setLoading(true);

    setActiveSnippet(snippets[i]);
  };

  return (
    <section className="mb-4" id="code-snippets">
      <ul className="flex gap-2 mr-2 overflow-auto text-sm font-medium text-center text-gray-400  dark:border-gray-700 dark:text-gray-400 scrollbar-thin scrollbar-xs  scrollbar-corner-gray-200 dark:scrollbar-corner-gray-800  scrollbar-thumb-[#bcc1c7] scrollbar-track-gray-200 dark:scrollbar-thumb-slate-700 dark:scrollbar-track-gray-800">
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
          snippets={snippets}
          activeSnippet={activeSnippet}
          handleSnippetPick={handleSnippetPick}
        />

        <Highlighter
          loading={loading}
          setLoading={setLoading}
          activeSnippet={activeSnippet}
          tag={activeSnippet.langTag}
          theme={theme}
          text={activeSnippet.text}
        />
      </div>
    </section>
  );
}

export default CodeSnippetsComponent;
