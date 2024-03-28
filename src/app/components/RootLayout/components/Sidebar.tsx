import { useEffect } from "react";
import ThemeToggler from "./ThemeToggler";
import { usePathname } from "next/navigation";
import SideBarSvg from "./SideBarSvg";
import { sidebarNav } from "@/common/types";
import Link from "next/link";
import { initDrawers } from "flowbite";

type Props = {
  sidebarNavs: sidebarNav[];
};

function Sidebar({ sidebarNavs }: Props) {
  const pathname = usePathname();

  const pathSegment = "/" + pathname.split("/")[1];

  useEffect(() => {
    initDrawers();
  }, []);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-gray-100 border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>

                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>

              <Link
                data-drawer-hide="logo-sidebar"
                href="/"
                className="flex ms-2 "
                style={{ position: "relative" }}
              >
                <img
                  width="100%"
                  className="h-8 me-3 max-w-[fit] max-2xs:hidden"
                  src="/assets/images/chiliLogo.svg"
                  alt=""
                />
              </Link>

              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Product List
              </span>
            </div>

            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed  top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0 pt-20 bg-gray-100 border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {sidebarNavs.map((nav) => (
              <li key={nav.path}>
                <Link
                  data-drawer-hide="logo-sidebar"
                  className={`duration-200 flex items-center p-2 ${
                    pathSegment == nav.path && "bg-gray-300/70 dark:bg-gray-700"
                  } text-gray-900 rounded-lg dark:text-white hover:bg-gray-200/60 dark:hover:bg-gray-700 group`}
                  href={nav.path}
                >
                  <SideBarSvg
                    active={pathSegment == nav.path}
                    {...nav.iconAttrs}
                  />

                  <span className="ms-3">{nav.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
