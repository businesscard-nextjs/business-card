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
      className={`mx-[40px] flex h-[30vh] w-[80%] flex-col items-center justify-start overflow-auto p-16 text-white`}
    >
      {elementList.map((e, i) => (
        <CardInput key={i} text={e.text} label={e.label} color={e.color} />
      ))}
    </div>
  );
}

export default ElementInput;
