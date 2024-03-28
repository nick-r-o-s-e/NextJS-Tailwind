import { snippet, snippetRef } from "@/common/types";

const fetchCodeSnippets = async (refs: snippetRef[]) => {
  return await Promise.all(
    refs.map(async (snippet, i) => {
      let snippetData: snippet = { ...snippet, id: i, text: null };

      try {
        const res = await fetch(
          snippet.url
            .replace("github.com", "raw.githubusercontent.com")
            .replace("blob/", "")
        );

        if (res.ok) {
          snippetData.text = await res
            .text()
            .then((text) => text)
            .catch((err) => {
              throw new Error(err);
            });
        }
      } catch (err) {
        console.log(`Error fetching ${snippet.url}:`, err);
      }

      return snippetData;
    })
  );
};

export default fetchCodeSnippets;
