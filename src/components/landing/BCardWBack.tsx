"use client";

import Image from "next/image";

export default function BusinessCardBack() {
  return (
    <div className="bg-main2 shadow-card flex aspect-[6/3.4] w-full items-center justify-center px-20 py-30 ">
      {/* logo */}
      <Image
        src="/Bmaker_Logo_w.svg"
        alt="Bmarker Logo"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "30%", height: "auto" }} // optional
      />
    </div>
  );
}
