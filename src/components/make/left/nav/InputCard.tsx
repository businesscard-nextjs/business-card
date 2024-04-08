"use client";
import { useRecoilState, useRecoilValue } from "recoil";
import { iElement, rc_elementList } from "@/src/components/make/left/leftAtom";
import { ColorPicker, ColorPickerProps, GetProp, Input } from "antd";

type InputCardProps = {
  element: {
    label: string;
    text: string;
    color: string;
  };
};

export default function InputCard({ element }: InputCardProps) {
  const getElementList = useRecoilValue(rc_elementList);

  // 옴션
  const [option, setOption] = useRecoilState<iElement[]>(rc_elementList);

  // text 추가
  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOption((prev: any) => {
      return prev.map((e: iElement) => {
        return e.label === element.label
          ? { ...e, text: event.target.value }
          : e;
      });
    });
  };

  // color 추가
  const onColorChange = (event: GetProp<ColorPickerProps, "value">) => {
    setOption((prev: any) => {
      return prev.map((e: iElement) => {
        return e.label === element.label
          ? {
              ...e,
              color: typeof event === "string" ? event : event?.toHexString(),
            }
          : e;
      });
    });
  };

  return (
    <div className="flex flex-col gap-24">
      <div className="flex items-center justify-between">
        <div className="text-20 text-main3">{element.label}</div>
        <ColorPicker value={element.color} onChange={onColorChange} />
      </div>
      <Input
        placeholder="Basic usage"
        onChange={onTextChange}
        value={element.text}
      />
    </div>
  );
}
