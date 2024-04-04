import Image from "next/image";
import Link from "next/link";
import BCardWFront from "../components/landing/BCardWFront";
import BCardWBack from "../components/landing/BCardWBack";
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
      {/* right */}
      {/* <div className="relative flex w-full flex-[3_3_0%] bg-[#F1E8D6] bg-landing bg-cover md:hidden">
        <Image
          src="/images/landing_bg.svg"
          alt="card_image"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="cloud absolute bottom-[80px] left-[50px] m-auto w-full">
          <Image
            src="/images/business-card.svg"
            alt="business_card"
            width={500}
            height={0}
            // fill
          />
        </div>
      </div> */}
      <div className="relative flex w-full flex-[3_3_0%] overflow-hidden bg-[#F1E8D6] md:hidden">
        <div className="absolute left-[-150px] top-[-250px] flex flex-col gap-100 ">
          <div className="flex -rotate-[30deg] gap-50">
            <Image
              src="/images/business-card-back.svg"
              alt="business-card-back"
              width={400}
              height={0}
            />
            <Image
              src="/images/business-card-front.svg"
              alt="business_card"
              width={400}
              height={0}
            />
            <Image
              src="/images/business-card-back.svg"
              alt="business-card-back"
              width={400}
              height={0}
            />
          </div>
          <div className="flex -rotate-[30deg] gap-50">
            <Image
              src="/images/business-card-front.svg"
              alt="business_card"
              width={400}
              height={0}
            />
            <Image
              src="/images/business-card-back.svg"
              alt="business-card-back"
              width={400}
              height={0}
              className="fadeIn shadow-card"
            />
            <Image
              src="/images/business-card-front.svg"
              alt="business_card"
              width={400}
              height={0}
            />
          </div>
          <div className="flex -rotate-[30deg]  gap-50">
            <Image
              src="/images/business-card-back.svg"
              alt="business-card-back"
              width={400}
              height={0}
            />
            <Image
              src="/images/business-card-front.svg"
              alt="business_card"
              width={400}
              height={0}
              className="fadeIn2 shadow-card"
            />
            <Image
              src="/images/business-card-front.svg"
              alt="business_card"
              width={400}
              height={0}
            />
          </div>
          <div className="flex -rotate-[30deg]  gap-50">
            <Image
              src="/images/business-card-back.svg"
              alt="business-card-back"
              width={400}
              height={0}
            />
            <Image
              src="/images/business-card-front.svg"
              alt="business_card"
              width={400}
              height={0}
            />
            <Image
              src="/images/business-card-front.svg"
              alt="business-card-back"
              width={400}
              height={0}
            />
          </div>
          <div className="flex -rotate-[30deg]  gap-50">
            <Image
              src="/images/business-card-front.svg"
              alt="business_card"
              width={400}
              height={0}
            />
            <Image
              src="/images/business-card-back.svg"
              alt="business-card-back"
              width={400}
              height={0}
            />
            <Image
              src="/images/business-card-front.svg"
              alt="business_card"
              width={400}
              height={0}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
