"use client";
import { Props } from "next/script";
import React from "react";
import CardInput from "./CardInput";
import { useRecoilValue } from "recoil";
import { rc_elementList } from "./leftAtom";

function ElementInput(props: Props) {
  const elementList = useRecoilValue(rc_elementList);
  return (
    <div
      className={`w-[80%] h-[36vh] flex flex-col justify-start items-center text-white mx-[40px] my-[20px] p-4 overflow-auto`}
    >
      {elementList.map((e) => (
        <CardInput label={e.label} isColorPicker={e.isColorPicker} />
      ))}
    </div>
  );
}

export default ElementInput;
