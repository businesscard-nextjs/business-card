"use client";
import { ColorPicker, ColorPickerProps, GetProp } from "antd";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { iElement, rc_elementList } from "./leftAtom";

type inputLabel = {
  label: string;
  text: string;
  isColorPicker: boolean;
};

type Color = GetProp<ColorPickerProps, "value">;

function CardInput({ label, text, isColorPicker }: inputLabel) {
  const [elementList, setElementList] =
    useRecoilState<iElement[]>(rc_elementList);

  const [color, setColor] = useState<Color>("#E77917");
  const [input, setInput] = useState(text);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    setElementList((prev: any) => {
      return prev.map((e: iElement) => {
        return e.label === label ? { ...e, text: event.target.value } : e;
      });
    });
  };

  return (
    <div className="w-full flex justify-between my-1">
      <span className="text-black px-4">{label}</span>
      {!isColorPicker ? (
        <input
          className="drop-shadow-sm w-[70%] p-1 text-black"
          onChange={onChange}
          value={input}
        />
      ) : (
        <ColorPicker value={color} onChange={setColor} />
      )}
    </div>
  );
}

export default CardInput;
