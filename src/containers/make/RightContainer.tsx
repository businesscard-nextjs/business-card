import BusinessCardFront from "@/src/components/landing/BusinessCardFront";

export default function RightContainer() {
  return (
    <div className="flex w-full flex-1 items-center justify-center p-20 px-50">
      <div className="flex flex-col items-center gap-80 pt-80">
        {/* <div className="w-[90%]"> */}
        <BusinessCardFront />
        {/* </div> */}
        <div className="flex w-full justify-end">
          <div className="button active big hover w-full max-w-[200px]">
            download
          </div>
        </div>
      </div>
    </div>
  );
}
