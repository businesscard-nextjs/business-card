import LeftContainer from "@/src/containers/make/LeftContainer";
import RightContainer from "@/src/containers/make/RightContainer";
import React from "react";

function page() {
  return (
    <div className="flex min-h-screen w-screen">
      <LeftContainer />
      <RightContainer />
    </div>
  );
}

export default page;
