import React from "react";
import SkeletonBox from "./components/SkeletonBox";

function loading() {
  return (
    <div
      role="status"
      className="flex flex-col gap-4 p-2 md:p-4 lg:px-12 animate-pulse"
    >
      <SkeletonBox sizeClasses="h-[36px] w-[100px] lg:h-[40px] lg:w-[112px]" />

      <SkeletonBox sizeClasses="h-[65px] lg:h-[130px]  w-[275px]  lg:w-[600px]" />

      <SkeletonBox sizeClasses="h-[15px] lg:h-[30px]   w-[350px]  lg:w-[700px]" />

      <SkeletonBox sizeClasses="h-[15px] lg:h-[30px]   w-[425px]  lg:w-[850px]" />

      <SkeletonBox sizeClasses="h-[15px] lg:h-[30px]   w-[400px]  lg:w-[800px]" />

      <SkeletonBox sizeClasses="h-[15px] lg:h-[30px]   w-[225px]  lg:w-[450px]" />

      <SkeletonBox sizeClasses="h-[7px]  lg:h-[15px]   w-[135px]  lg:w-[270px]" />

      <SkeletonBox sizeClasses="h-[7px]  lg:h-[15px]   w-[190px]  lg:w-[380px]" />

      <SkeletonBox sizeClasses="h-[7px]  lg:h-[15px]   w-[240px]  lg:w-[480px]" />

      <SkeletonBox sizeClasses="h-[40px] lg:h-[60px]   w-[115px]  lg:w-[145px]" />

      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default loading;
