"use client";

import Image from "next/image";

import { useRecoilValue } from "recoil";
import {
  rc_direction,
  rc_elementList,
} from "@/src/components/make/left/leftAtom";
import BCardInfo from "./BCardInfo";

interface PropsType {
  getRef?: React.RefObject<HTMLDivElement>;
}

const BCardWFrontLayout2 = ({ getRef }: PropsType) => {
  const getCardInfo = useRecoilValue(rc_elementList);
  const getCardDirection = useRecoilValue(rc_direction);

  // 카드 정보 가져오기
  const cardInfo = (label: string) => {
    const filteredElements = getCardInfo.filter(
      (element) => element.label === label,
    );

    return filteredElements.length > 0 ? filteredElements[0] : null;
  };

  return (
    <div
      ref={getRef}
      className={`flex bg-white shadow-makeCard ${getCardDirection === "vertical" ? "aspect-[6/3.4] w-full px-20 py-30" : "aspect-[3.4/6] h-full w-[50%] flex-col p-20"}`}
    >
      {/* 카드 정보 */}
      <div
        className={`flex w-full flex-[1.2] flex-col justify-between ${getCardDirection === "vertical" ? "flex-[1.2]" : "flex-[1.4]"}`}
      >
        <div className="flex flex-col">
          {/* name */}
          <div
            className="text-24 font-semibold"
            style={{
              color: cardInfo("name")?.text.length
                ? cardInfo("name")?.color
                : "#CBCBCB",
            }}
          >
            {cardInfo("name")?.text?.length ? cardInfo("name")?.text : "Name"}
          </div>
          {/* position */}
          <div
            className="text-16"
            style={{
              color: cardInfo("position")?.text.length
                ? cardInfo("position")?.color
                : "#CBCBCB",
            }}
          >
            {cardInfo("position")?.text?.length
              ? cardInfo("position")?.text
              : "position"}
          </div>
        </div>
        {/* 명함 상세 정보 */}
        <div className="flex flex-col gap-4">
          {getCardInfo.map((info, i) => {
            return <BCardInfo info={info} key={`BCardInfo-${i}`} />;
          })}
        </div>
      </div>
      {/* 회사 로고 */}
      <div
        className={`flex w-full flex-1 justify-end ${getCardDirection === "vertical" ? "items-start" : "items-end"}`}
      >
        <Image
          src="/images/Bmaker_Logo_g.svg"
          alt="Bmarker Logo"
          width={0}
          height={0}
          sizes="100vw"
          priority
          style={{ width: "35%", height: "auto" }} // optional
        />
      </div>
    </div>
  );
};

export default BCardWFrontLayout2;
