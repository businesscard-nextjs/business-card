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
      <Radio.Group onChange={onChange} defaultValue="Vertical">
        <Radio checked value="Vertical">
          <span className="text-[#000] p-16">Vertical</span>
        </Radio>
        <Radio value="Horizonal">
          <span className="text-[#000] p-16">Horizonal</span>
        </Radio>
      </Radio.Group>
    </BoxLayout>
  );
}

export default SizeDecideBox;
