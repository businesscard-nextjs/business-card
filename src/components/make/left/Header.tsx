import { ChildProps } from "postcss";
import React from "react";

function Header(props: ChildProps) {
  return (
    <header className="w-[80%] bg-[#936E6E] text-white mx-auto my-[40px] p-4 text-xl text-center align-middle">
      헤더로고
    </header>
  );
}

export default Header;
