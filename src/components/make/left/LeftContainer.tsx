import React from "react";
import Header from "./Header";
import SizeDecideBox from "./SizeDecideBox";
import ElementPicker from "./ElementPicker";
import ElementInput from "./ElementInput";

function LeftContainer() {
  return (
    <div className="w-1/2 min-h-screen bg-[#FDF2DD] flex flex-col justify-center items-center">
      <Header />
      <SizeDecideBox />
      <ElementPicker />
      <ElementInput />
    </div>
  );
}

export default LeftContainer;
