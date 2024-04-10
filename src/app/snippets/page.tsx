import Link from "next/link";
import LinkArrowBtn from "../components/Buttons/LinkArrowBtn";
import Snippets from "../components/Snippets/Snippets";
import { codeSnippetsRefs } from "./codeSnippetsRefs";
import InfoCard from "../components/InfoCard";

export default async function page() {
  return (
    <div className="mx-auto max-w-screen-xl lg:px-12">
      <InfoCard
        title="Code Snippets Component"
        content={
          <>
            This is a component that allows you to fetch code from GitHub
            repository and place it in tabs for viewing and copying. Loading and
            Error boundaries are also considered, as is a corresponding change
            of theme with optimized highlighting rendering. For colored code
            highlighting was used{" "}
            <Link
              href="https://www.npmjs.com/package/react-syntax-highlighter"
              target="_blank"
              className="text-blue-500 underline"
            >
              react-syntax-highlighting
            </Link>{" "}
            package.
          </>
        }
        type="About"
        actionButtons={
          <LinkArrowBtn
            text="See on GitHub"
            target="_blank"
            href="https://github.com/nick-r-o-s-e/NextJS-Tailwind/tree/main/src/app/components/Snippets"
          />
        }
      />

      <Snippets snippetsRefs={codeSnippetsRefs} />
    </div>
  );
}
