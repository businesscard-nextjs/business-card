"use client";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full">
      <div className="bg-main1 flex flex-[1.5_1.5_0%] flex-col items-center justify-center gap-80 p-20">
        <Image
          src="/Bmaker_Logo.svg"
          alt="Bmarker Logo"
          className="dark:invert"
          width={240}
          height={260}
          priority
        />
        <Link
          href="make"
          className="button active big hover w-full max-w-[240px] font-semibold"
        >
          Start
        </Link>
      </div>
      <div className="relative flex w-full flex-[3_3_0%] bg-[#F1E8D6]">
        <Image
          src="/landing_bg.svg"
          alt="card_image"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="">card</div>
      </div>
    </main>
  );
}
