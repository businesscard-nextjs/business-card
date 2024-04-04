"use client";
import { ColorPicker } from "antd";
import React, { useState } from "react";

type inputLable = {
  label: string;
  isColorPicker: boolean;
};

function CardInput({ label, isColorPicker }: inputLable) {
  const [input, setInput] = useState<string>();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="w-full flex justify-between my-1">
      <span className="text-black px-4">{label}</span>
      {!isColorPicker ? (
        <input
          onChange={onChange}
          value={input}
          className="w-[70%] p-1 text-black"
        />
      ) : (
        <ColorPicker />
      )}
    </div>
  );
}

export default CardInput;
