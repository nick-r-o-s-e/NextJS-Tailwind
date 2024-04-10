import Snippets from "../components/Snippets/Snippets";
import { filesSnippetsRefs } from "./filesSnippetsRefs";

export default async function page() {
  return (
    <div className="mx-auto max-w-screen-xl lg:px-12">
      <Snippets snippetsRefs={filesSnippetsRefs} />
    </div>
  );
}
