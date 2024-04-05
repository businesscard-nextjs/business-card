import Image from "next/image";
import Link from "next/link";
import LandingRight from "../components/landing/LandingRight";

// import type { NextPage } from "next";

// interface Props {
//   propName: string;
// }

const Home = () => {
  return (
    <main className="flex h-screen w-full md:flex-col">
      {/* left */}
      <div className="md:object-fit md:bg-landing_m flex flex-[1.5_1.5_0%] flex-col items-center justify-center gap-80 bg-main1 p-30 md:bg-cover">
        <Image
          src="/images/Bmaker_Logo.svg"
          alt="Bmarker Logo"
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
      <div className="relative flex w-full flex-[3_3_0%] overflow-hidden bg-[#F1E8D6] md:hidden">
        <LandingRight />
      </div>
    </main>
  );
};

export default Home;
