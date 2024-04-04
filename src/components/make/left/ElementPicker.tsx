"use client";
import React, { Children, MouseEventHandler, useEffect, useState } from "react";
import BoxLayout from "./BoxLayout";
import ElementBox from "./ElementBox";
import { useRecoilState } from "recoil";
import { iElement, rc_elementList } from "./leftAtom";

function ElementPicker() {
  const elementList: iElement[] = [
    { label: "name", text: "", isColorPicker: false },
    { label: "background", text: "", isColorPicker: true },
    { label: "address", text: "", isColorPicker: false },
    { label: "company name", text: "", isColorPicker: false },
    { label: "phone", text: "", isColorPicker: false },
    { label: "office name", text: "", isColorPicker: false },
    { label: "position", text: "", isColorPicker: false },
    { label: "fax", text: "", isColorPicker: false },
    { label: "email", text: "", isColorPicker: false },
  ];
  const [picked, setPicked] = useRecoilState<iElement[]>(rc_elementList);

  const putElement = (element: iElement) => {
    setPicked((prevPicked) => {
      if (prevPicked.some((picked) => picked.label === element.label)) {
        return prevPicked.filter(
          (picked: iElement) => picked.label !== element.label,
        );
      } else {
        return [...prevPicked, element];
      }
    });
  };

  const hasElementInPickedList = (element: iElement) => {
    return picked.some((p) => p.label === element.label);
  };

  return (
    <BoxLayout bgColor="#fff" margin="40px">
      <div className="w-full grid grid-cols-4 grid-rows-2 gap-2">
        {elementList.map((element: iElement) => {
          return (
            <ElementBox
              key={element.label}
              textColor={hasElementInPickedList(element) ? "#fff" : "#000"}
              onClick={() => putElement(element)}
              bgColor={hasElementInPickedList(element) ? "#E77917" : "#fff"}
            >
              {element.label}
            </ElementBox>
          );
        })}
      </div>
    </BoxLayout>
  );
}

export default ElementPicker;
