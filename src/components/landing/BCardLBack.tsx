"use client";

import Image from "next/image";

export default function BCardLBack() {
  return (
    <div className="flex aspect-[3.4/6] w-[80%] flex-col items-center justify-center bg-main2 px-30 py-20 shadow-card">
      <Image
        src="/images/Bmaker_Logo_w.svg"
        alt="Bmarker Logo"
        width={0}
        height={0}
        sizes="100vw"
        priority
        style={{ width: "50%", height: "auto" }} // optional
      />
    </div>
  );
}
