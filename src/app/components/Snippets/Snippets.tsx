"use client";

import { useEffect, useState } from "react";
import SnippetsSection from "./components/SnippetsSection";
import SnippetsSkeleton from "./components/snippetsSkeleton/SnippetsSkeleton";
import { snippet, snippetRef } from "@/common/types";
import fetchCodeSnippets from "@/api/fetchCodeSnippets";

type Props = {
  snippetsRefs: snippetRef[];
};

function Snippets({ snippetsRefs }: Props) {
  const [snippets, setSnippets] = useState<snippet[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCodeSnippets(snippetsRefs);

      setSnippets(data);
    };

    getData();
  }, []);

  return !(snippets == null) ? (
    <SnippetsSection
      snippets={snippets}
      setSnippets={setSnippets}
      snippetsRefs={snippetsRefs}
    />
  ) : (
    <SnippetsSkeleton />
  );
}

export default Snippets;
