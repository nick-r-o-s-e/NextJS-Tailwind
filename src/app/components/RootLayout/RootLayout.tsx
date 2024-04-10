"use client";

import Sidebar from "./components/Sidebar";
import { useTheme } from "@/contexts/ThemeContext";
import sidebarNavs from "./sidebarNavs";

function RootLayout({ children }: { children: React.ReactNode }) {
  const { mode } = useTheme();

  return (
    <html lang="en" className={`${mode || "hidden"}`}>
      <body className="relative bg-gray-300  dark:bg-gray-900  bg-repeat bg-auto scrollbar  scrollbar-corner-gray-200 dark:scrollbar-corner-[#16191e] scrollbar-thumb-[#b7b7b7] scrollbar-track-gray-200  dark:scrollbar-thumb-[#353535] dark:scrollbar-track-[#16191e]">
        <div className="absolute w-full h-full top-0 left-0 bg-body_bg invert-[100%] dark:invert-[5%]"></div>
        {mode && (
          <>
            <Sidebar sidebarNavs={sidebarNavs} />

            <div className="p-4 mt-20 md:ml-64 max-w-[1800px]">{children}</div>
          </>
        )}
      </body>
    </html>
  );
}

export default RootLayout;
