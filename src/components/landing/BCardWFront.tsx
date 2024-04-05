"use client";

import Image from "next/image";

import { useState } from "react";
import { useRecoilValue } from "recoil";
import { rc_elementList } from "@/src/components/make/left/leftAtom";

interface PropsType {
  getRef?: React.RefObject<HTMLDivElement>;
}

const BCardWFront = ({ getRef }: PropsType) => {
  const getCardInfo = useRecoilValue(rc_elementList);
  const [color, setColor] = useState();

  const cardInfo = (label: string) => {
    const filteredElements = getCardInfo.filter(
      (element) => element.label === label,
    );

    // console.log(filteredElements.length > 0 ? filteredElements[0] : null);
    return filteredElements.length > 0 ? filteredElements[0] : null;
  };

  return (
    <div
      ref={getRef}
      className="flex aspect-[6/3.4] w-[500px] bg-white px-20 py-30 shadow-card"
    >
      {/* logo */}
      <div className="flex w-full flex-1 items-center justify-center">
        <Image
          src="/images/Bmaker_Logo.svg"
          alt="Bmarker Logo"
          width={0}
          height={0}
          sizes="100vw"
          priority
          style={{ width: "60%", height: "auto" }} // optional
        />
      </div>
      {/* info */}
      <div className="flex w-full flex-1 flex-col justify-between p-10">
        <div className="flex flex-col gap-2">
          {/* name */}
          <div
            className="text-24 font-semibold"
            style={{
              color: cardInfo("name")?.color,
            }}
          >
            {cardInfo("name")?.text.length ? cardInfo("name")?.text : "Name"}
          </div>
          {/* position */}
          <div
            className="text-16"
            style={{
              color: cardInfo("position")?.color,
            }}
          >
            {cardInfo("position")?.text ?? "Frontend Developer"}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {/* phone */}
          <div
            className="text-16"
            style={{
              color: cardInfo("phone")?.color,
            }}
          >
            {cardInfo("phone")?.text ?? "T.010-5288-7462"}
          </div>
          {/* address */}
          <div
            className="text-16"
            style={{
              color: cardInfo("address")?.color,
            }}
          >
            {cardInfo("address")?.text.length
              ? cardInfo("address")?.text
              : "A.Moraene-ro,3gil11"}
          </div>
          {/* email */}
          <div
            className="text-16"
            style={{
              color: cardInfo("email")?.color,
            }}
          >
            {cardInfo("email")?.text ?? " E.jungwon0508@naver.com"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BCardWFront;
