import Image from "next/image";
import Link from "next/link";
import BusinessCardFront from "../components/landing/BusinessCardFront";
import BusinessCardBack from "../components/landing/BusinessCardBack";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full md:flex-col">
      {/* left */}
      <div className="bg-main1 md:bg-landing md:object-fit flex flex-[1.5_1.5_0%] flex-col items-center justify-center gap-80 p-30 md:bg-cover">
        <BusinessCardFront />
        <BusinessCardBack />
        <Image
          src="/Bmaker_Logo.svg"
          alt="Bmarker Logo"
          className="dark:invert"
          width={240}
          height={260}
          priority
        />
        <Link
          href="/make"
          passHref
          className="flex w-full max-w-[240px] justify-center"
        >
          <div className="button active big hover w-full max-w-[240px] font-semibold">
            Start
          </div>
        </Link>
      </div>
      {/* right */}
      <div className="relative flex w-full flex-[3_3_0%] bg-[#F1E8D6] md:hidden">
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
