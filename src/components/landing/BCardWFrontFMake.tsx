"use client";

import Image from "next/image";

import { useRecoilValue } from "recoil";
import {
  rc_direction,
  rc_elementList,
} from "@/src/components/make/left/leftAtom";

interface PropsType {
  getRef?: React.RefObject<HTMLDivElement>;
}

const BCardWFrontFMake = ({ getRef }: PropsType) => {
  const getCardInfo = useRecoilValue(rc_elementList);
  const getCardDirection = useRecoilValue(rc_direction);

  const cardInfo = (label: string) => {
    const filteredElements = getCardInfo.filter(
      (element) => element.label === label,
    );

    return filteredElements.length > 0 ? filteredElements[0] : null;
  };

  return (
    <div
      ref={getRef}
      className={`flex bg-white shadow-card ${getCardDirection === "vertical" ? "aspect-[6/3.4] w-[80%] px-20 py-30" : "aspect-[3.4/6] w-[40%] flex-col p-20"}`}
    >
      {/* logo */}
      <div className="flex w-full flex-1 items-center justify-center">
        <Image
          src="/images/Bmaker_Logo_g.svg"
          alt="Bmarker Logo"
          width={0}
          height={0}
          sizes="100vw"
          priority
          style={{ width: "50%", height: "auto" }} // optional
        />
      </div>
      {/* info */}
      <div
        className={`flex w-full flex-col justify-between ${getCardDirection === "vertical" ? "flex-[1.2]" : "flex-1"}`}
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
              color: cardInfo("position")?.color ?? "#CBCBCB",
            }}
          >
            {cardInfo("position")?.text?.length
              ? cardInfo("position")?.text
              : "position"}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {/* address */}
          <div
            className="text-14"
            style={{
              color: cardInfo("address")?.text.length
                ? cardInfo("address")?.color
                : "#CBCBCB",
            }}
          >
            {cardInfo("address")?.text.length
              ? cardInfo("address")?.text
              : "Moraene-ro,3gil11"}
          </div>
          {/* office phone */}
          <div
            className="text-14"
            style={{
              color: cardInfo("office phone")?.color ?? "#CBCBCB",
            }}
          >
            {cardInfo("office phone")?.text.length
              ? cardInfo("office phone")?.text
              : "Tel.02-000-0000"}
          </div>
          {/* fax */}
          <div
            className="text-14"
            style={{
              color: cardInfo("fax")?.color ?? "#CBCBCB",
            }}
          >
            {cardInfo("fax")?.text.length
              ? cardInfo("fax")?.text
              : "Fax.02-000-0000"}
          </div>
          {/* phone */}
          <div
            className="text-14"
            style={{
              color: cardInfo("phone")?.color ?? "#CBCBCB",
            }}
          >
            {cardInfo("phone")?.text.length
              ? cardInfo("phone")?.text
              : "Mobile.010-0000-0000"}
          </div>
          {/* email */}
          <div
            className="text-14"
            style={{
              color: cardInfo("email")?.color ?? "#CBCBCB",
            }}
          >
            {cardInfo("email")?.text.length
              ? cardInfo("email")?.text
              : "E-mail.jungwon0508@naver.com"}
          </div>{" "}
          {/* site */}
          <div
            className="text-14"
            style={{
              color: cardInfo("site")?.color ?? "#CBCBCB",
            }}
          >
            {cardInfo("site")?.text.length
              ? cardInfo("site")?.text
              : "www.sample.com"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BCardWFrontFMake;
