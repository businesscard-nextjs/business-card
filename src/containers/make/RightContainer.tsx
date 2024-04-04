import DownloadIcon from "@/src/components/icons/DownloadIcon";
import BCardWFront from "@/src/components/landing/BCardWFront";
import BCardLFront from "@/src/components/landing/BCardLFront";

export default function RightContainer() {
  return (
    <div className="relative flex w-full flex-1 items-center justify-center p-30">
      {/* <div className="flex w-[80%]"> 
      <BCardWFront />
      </div> */}
      <div className="flex w-full max-w-[360px] items-center justify-center">
        <BCardLFront />
      </div>

      <div className="button active big hover absolute bottom-[30px] right-[50px] w-full max-w-[180px] items-center gap-4">
        <DownloadIcon color="white" />
        download
      </div>
    </div>
  );
}
