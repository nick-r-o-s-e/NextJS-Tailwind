"use client";

import { useEffect, useState } from "react";
import CodeSnippets from "./components/CodeSnippets";
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

  return snippets ? <CodeSnippets snippets={snippets} /> : <SnippetsSkeleton />;
}

export default Snippets;
