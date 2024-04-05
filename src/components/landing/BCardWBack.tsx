"use client";

import Image from "next/image";

export default function BCardWBack() {
  return (
    <div className="flex aspect-[6/3.4] w-full items-center justify-center bg-main2 px-20 py-30 shadow-card ">
      {/* logo */}
      <Image
        src="/Bmaker_Logo_w.svg"
        alt="Bmarker Logo"
        width={0}
        height={0}
        sizes="100vw"
        priority
        style={{ width: "30%", height: "auto" }} // optional
      />
    </div>
  );
}
