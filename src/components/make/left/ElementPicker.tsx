"use client";
import React, { Children, MouseEventHandler, useState } from "react";
import BoxLayout from "./BoxLayout";
import ElementBox from "./ElementBox";

function ElementPicker() {
  const elementList: string[] = [
    "name",
    "address",
    "company name",
    "phone",
    "office name",
    "직책",
    "fax",
    "email",
  ];
  const [picked, setPicked] = useState([] as any);

  const putElement = (element: string) => {
    setPicked((p: any) =>
      picked.includes(p)
        ? picked.filter((ele: string) => {
            return ele !== element;
          })
        : [...picked, element],
    );
  };

  return (
    <BoxLayout bgColor="#fff" margin="40px">
      <div className="w-full grid grid-cols-4 grid-rows-2">
        {elementList.map((element: string) => {
          return (
            <ElementBox
              textColor={!!picked.includes(element) ? "#000" : "#fff"}
              onClick={() => putElement(element)}
              bgColor={!!picked.includes(element) ? "#fff" : "#999"}
            >
              {element}
            </ElementBox>
          );
        })}
      </div>
    </BoxLayout>
  );
}

export default ElementPicker;
