import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-200/70 to-transparent dark:from-transparent w-full h-full absolute top-0 left-0 z-0"></div>
      {children}
    </>
  );
}
