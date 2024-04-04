"use client";

import Image from "next/image";

export default function BusinessCardFront() {
  return (
    <div className="flex aspect-[3.4/6] w-[80%] flex-col bg-white px-30 py-20 shadow-card">
      {/* logo */}
      <div className="flex w-full flex-1 items-center justify-center">
        <Image
          src="/images/Bmaker_Logo.svg"
          alt="Bmarker Logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "50%", height: "auto" }} // optional
        />
      </div>
      {/* info */}
      <div className="flex w-full flex-1 flex-col justify-end gap-80 p-10">
        <div className="flex flex-col gap-2">
          <div className="text-22 font-semibold">Choi Jeongwon</div>
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
}
