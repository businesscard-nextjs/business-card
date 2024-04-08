"use client";
import { useRecoilState, useRecoilValue } from "recoil";
import { iElement, rc_elementList } from "@/src/components/make/left/leftAtom";
import { ColorPicker, ColorPickerProps, GetProp, Input } from "antd";
import InputCard from "./InputCard";
import ElementBox from "../ElementBox";

export default function TextNav() {
  // 저장된 옵션 리스트
  const getElementList = useRecoilValue(rc_elementList);

  // 기본 옵션 리스트
  const elementList: iElement[] = [
    { label: "Name", text: "", color: "#000", placeholder: "Name", header: "" },
    {
      label: "Position",
      text: "",
      color: "#000",
      placeholder: "position",
      header: "",
    },
    {
      label: "Address",
      text: "",
      color: "#000",
      placeholder: "Moraenaro 3gil 11",
      header: "",
    },
    {
      label: "Mobile phone",
      text: "",
      color: "#000",
      placeholder: "010-1234-1234",
      header: "Mobile.",
    },
    {
      label: "Office phone",
      text: "",
      color: "#000",
      placeholder: "02-0000-0000",
      header: "Tel.",
    },
    {
      label: "Fax",
      text: "",
      color: "#000",
      placeholder: "02-0000-0000",
      header: "Fax.",
    },
    {
      label: "Email",
      text: "",
      color: "#000",
      placeholder: "bcard@gmail.com",
      header: "E-mail.",
    },
    {
      label: "Site",
      text: "",
      color: "#000",
      placeholder: "www.BCard.com",
      header: "",
    },
  ];

  // 옴션
  const [picked, setPicked] = useRecoilState<iElement[]>(rc_elementList);

  // 옵션 추가
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

  // 옵션 선택 여부
  const hasElementInPickedList = (element: iElement) => {
    return picked.some((p) => p.label === element.label);
  };

  return (
    <div className="flex flex-col gap-40">
      {/* 옵션 리스트*/}
      <div className="shadow-optionCard flex flex-col gap-20 rounded-10 border bg-white p-20">
        <div className="text-20 text-main3">Option</div>
        <div className="flex flex-wrap gap-20">
          {elementList.map((element: iElement) => {
            return (
              <ElementBox
                key={element.label}
                textColor={hasElementInPickedList(element) ? "#fff" : "#000"}
                borderColor={
                  hasElementInPickedList(element) ? "#E77917" : "#EEEEEE"
                }
                onClick={() => putElement(element)}
                bgColor={hasElementInPickedList(element) ? "#E77917" : "#fff"}
              >
                {element.label}
              </ElementBox>
            );
          })}
        </div>
      </div>
      {/* 카드 정보 입력 */}
      <div className="flex h-[250px] flex-col gap-30 overflow-y-scroll">
        {getElementList.map((element: iElement, i) => (
          <InputCard element={element} key={`getElementList-${i}`} />
        ))}
      </div>
    </div>
  );
}
