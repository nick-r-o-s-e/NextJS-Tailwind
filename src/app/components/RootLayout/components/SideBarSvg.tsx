import { SVGProps } from "react";

type Props = {
  active: boolean | undefined;
  svgAttrs: SVGProps<SVGSVGElement>;
  pathAttrs: SVGProps<SVGPathElement>;
};

function SideBarSvg({ active, pathAttrs, svgAttrs }: Props) {
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
      <path {...pathAttrs} />
    </svg>
  );
}

export default SideBarSvg;
