"use client";

import Image from "next/image";

export default function BusinessCardFront() {
  return (
    <div className="shadow-card flex aspect-[6/3.4] bg-white px-20 py-30">
      {/* logo */}
      <div className="flex w-full flex-1 items-center justify-center">
        <Image
          src="/Bmaker_Logo.svg"
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
          <div className="text-18 font-semibold">Choi Jeongwon</div>
          <div className="text-16">Frontend Developer</div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-18">T. 010-5288-7462</div>
          <div className="text-18">A. Moraene-ro, 3 gil 11</div>
          <div className="text-18">E. jungwon0508@naver.com</div>
        </div>
      </div>
    </div>
  );
}
