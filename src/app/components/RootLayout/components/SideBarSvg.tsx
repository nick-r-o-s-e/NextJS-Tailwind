import { ReactNode, SVGProps } from "react";

type Props = {
  active: boolean | undefined;
  svgAttrs: SVGProps<SVGSVGElement>;
  pathsAttrs: SVGProps<SVGPathElement>[];
};

function SideBarSvg({ active, svgAttrs, pathsAttrs }: Props) {
  return (
    <svg
      className={`w-5 h-5 text-gray-${
        active ? "900" : "500"
      } transition duration-75 dark:text-${
        active ? "white" : "gray-400"
      } group-hover:text-gray-900 dark:group-hover:text-white`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox={svgAttrs.viewBox}
    >
      {}
      {pathsAttrs.map((attrs, i) => (
        <path key={i} {...attrs}></path>
      ))}
    </svg>
  );
}

export default SideBarSvg;
