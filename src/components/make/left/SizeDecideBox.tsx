"use client";

import { Radio, RadioChangeEvent } from "antd";
import React, { useState } from "react";
import BoxLayout from "./BoxLayout";

function SizeDecideBox() {
  const [value, setValue] = useState("세로");

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <BoxLayout margin="0 40px" bgColor="#fff">
      <span className="text-[#000]">명함 방향은 {value}로 할게요</span>
      <Radio.Group onChange={onChange}>
        <div className="flex justify-center items-center">
          <Radio defaultChecked value="세로">
            <span className="text-[#000] after:content-['세로'] p-2"></span>
          </Radio>
        </div>
        <div className="flex justify-center items-center">
          <Radio value="가로">
            <span className="text-[#000] after:content-['가로'] p-2"></span>
          </Radio>
        </div>
      </Radio.Group>
    </BoxLayout>
  );
}

export default SizeDecideBox;
