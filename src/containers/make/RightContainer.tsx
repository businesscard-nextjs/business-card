"use client";

import DownloadIcon from "@/src/components/icons/DownloadIcon";
import BCardWFront from "@/src/components/landing/BCardWFront";
import BCardLFront from "@/src/components/landing/BCardLFront";
import BCardLBack from "@/src/components/landing/BCardLBack";

import { useRecoilValue } from "recoil";
import { rc_direction } from "@/src/components/make/left/leftAtom";
import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";

export default function RightContainer() {
  const ref = useRef<HTMLDivElement>(null);

  const getCardDirection = useRecoilValue(rc_direction);

  //image download function
  const downloadImage = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
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
    <div className="relative flex w-full flex-1 items-center justify-center p-30">
      {getCardDirection === "vertical" ? (
        <div className="flex w-[80%] items-center justify-center">
          <BCardWFront getRef={ref} />
        </div>
      ) : (
        <div className="flex w-full max-w-[360px] items-center justify-center">
          <BCardLFront />
        </div>
      )}
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
