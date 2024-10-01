import dynamic from "next/dynamic";
import React from "react";

const LinePath = dynamic(() => import("@/components/LinePath"), { ssr: false });

const Page = () => {
  return (
    <div>
      <div className="w-full aspect-[1440/795] bg-red-500"></div>
      <LinePath />
      <div className="w-full aspect-[1440/795] bg-red-500"></div>
    </div>
  );
};

export default Page;
