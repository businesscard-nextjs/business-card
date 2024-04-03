import React from "react";
import Header from "./Header";
import SizeDecideBox from "./SizeDecideBox";
import ElementPicker from "./ElementPicker";

function LeftContainer() {
  return (
    <div className="w-1/2 min-h-screen bg-[#F1E8D6] flex flex-col">
      <Header />
      <SizeDecideBox />
      <ElementPicker />
    </div>
  );
}

export default LeftContainer;
