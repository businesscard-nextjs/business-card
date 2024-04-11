"use client";

import DownloadIcon from "@/src/components/icons/DownloadIcon";
import BCardWFrontLayout1 from "@/src/components/make/right/BCardWFrontLayout1";
import BCardWFrontLayout2 from "@/src/components/make/right/BCardWFrontLayout2";
import BCardWFrontLayout3 from "@/src/components/make/right/BCardWFrontLayout3";
import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import { useRecoilValue } from "recoil";
import { rc_layout } from "@/src/components/make/left/leftAtom";

export default function RightContainer() {
  const ref = useRef<HTMLDivElement>(null);

  const getLayout = useRecoilValue(rc_layout);

  // 이미지 다운로드 기능
  const downloadImage = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        console.log("dataUrl", dataUrl);
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <div className="relative flex w-full flex-[3_3_0%] flex-col items-center gap-20 bg-gray1 px-30 pb-30 pt-40">
      {/* 카드 샘플 */}
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[65%] w-[60%]">
        <div className="flex h-full w-full items-center justify-center">
          {getLayout === "layout1" ? (
            <BCardWFrontLayout1 getRef={ref} />
          ) : getLayout === "layout2" ? (
            <BCardWFrontLayout2 getRef={ref} />
          ) : (
            <BCardWFrontLayout3 getRef={ref} />
          )}
        </div>
      </div>

      {/* 다운로드 버튼 */}
      <div
        className="button active big hover absolute bottom-[30px] right-[50px] w-full max-w-[180px] items-center gap-4"
        onClick={downloadImage}
      >
        <DownloadIcon color="white" />
        download
      </div>
    </div>
  );
}
