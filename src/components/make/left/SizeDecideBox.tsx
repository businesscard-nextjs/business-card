"use client";

import { Radio, RadioChangeEvent } from "antd";
import React, { useState } from "react";
import BoxLayout from "./BoxLayout";
import { useRecoilState } from "recoil";
import { rc_direction } from "./leftAtom";

function SizeDecideBox() {
  const [value, setValue] = useRecoilState(rc_direction);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <BoxLayout margin="0 40px" bgColor="#fff">
      <span className="text-black">Card Direction</span>
      <Radio.Group onChange={onChange} defaultValue="vertical">
        <Radio checked value="vertical">
          <span className="p-16 text-[#000]">Vertical</span>
        </Radio>
        <Radio value="horizonal">
          <span className="p-16 text-[#000]">Horizonal</span>
        </Radio>
      </Radio.Group>
    </BoxLayout>
  );
}

export default SizeDecideBox;
