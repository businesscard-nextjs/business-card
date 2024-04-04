"use client";

import Image from "next/image";

interface PropsType {
  getRef?: React.RefObject<HTMLDivElement>;
}
const BCardWFront = ({ getRef }: PropsType) => {
  return (
    <div
      ref={getRef}
      className="flex aspect-[6/3.4]  w-[500px] bg-white px-20 py-30 shadow-card"
    >
      {/* logo */}
      <div className="flex w-full flex-1 items-center justify-center">
        <Image
          src="/images/Bmaker_Logo.svg"
          alt="Bmarker Logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "60%", height: "auto" }} // optional
        />
      </div>
      {/* info */}
      <div className="flex w-full flex-1 flex-col justify-between p-10">
        <div className="flex flex-col gap-2">
          <div className="text-24 font-semibold">Choi Jeongwon</div>
          <div className="text-16">Frontend Developer</div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-16">T. 010-5288-7462</div>
          <div className="text-16">A. Moraene-ro, 3 gil 11</div>
          <div className="text-16">E. jungwon0508@naver.com</div>
        </div>
      </div>
    </div>
  );
};

export default BCardWFront;
