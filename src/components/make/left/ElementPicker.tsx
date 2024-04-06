"use client";
import React, { Children, MouseEventHandler, useEffect, useState } from "react";
import BoxLayout from "./BoxLayout";
import ElementBox from "./ElementBox";
import { useRecoilState } from "recoil";
import { iElement, rc_elementList } from "./leftAtom";

function ElementPicker() {
  const elementList: iElement[] = [
    { label: "name", text: "", color: "#000" },
    { label: "logo", text: "", color: "#000" },
    { label: "address", text: "", color: "#000" },
    { label: "office phone", text: "", color: "#000" },
    { label: "phone", text: "", color: "#000" },
    { label: "office name", text: "", color: "#000" },
    { label: "site", text: "", color: "#000" },
    { label: "position", text: "", color: "#000" },
    { label: "fax", text: "", color: "#000" },
    { label: "email", text: "", color: "#000" },
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
      <div className="grid-rows-16 grid w-full grid-cols-3 gap-10">
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
