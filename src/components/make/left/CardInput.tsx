"use client";
import { ColorPicker, ColorPickerProps, GetProp } from "antd";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { iElement, rc_elementList, rc_imageFile } from "./leftAtom";

type inputLabel = {
  label: string;
  text: string;
  color: ColorPickerProps["value"];
};

const ALLOW_FILE_EXTENSION = "jpg,jpeg,png";
const FILE_SIZE_MAX_LIMIT = 5 * 1024 * 1024; // 5MB

function CardInput({ label, text, color }: inputLabel) {
  const [elementList, setElementList] =
    useRecoilState<iElement[]>(rc_elementList);
  const [backgroundImageFile, setBackgroundImageFile] =
    useRecoilState<File>(rc_imageFile);

  const removeFileName = (originalFileName: string): string => {
    const lastIndex = originalFileName.lastIndexOf(".");
    if (lastIndex < 0) {
      return "";
    }

    return originalFileName.substring(lastIndex + 1).toLowerCase();
  };

  const fileUploadValidHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];
    if (files === undefined) {
      return;
    }
    const fileExtensionValid = ({ name }: { name: string }): boolean => {
      const extension = removeFileName(name);
      if (!(ALLOW_FILE_EXTENSION.indexOf(extension) > -1) || extension === "") {
        return false;
      }
      return true;
    };
    // 파일 확장자 체크
    if (!fileExtensionValid(files)) {
      target.value = "";
      alert(
        `업로드 가능한 확장자가 아닙니다. [가능한 확장자 : ${ALLOW_FILE_EXTENSION}]`,
      );
      return;
    }
    // 파일 용량 체크
    if (files.size > FILE_SIZE_MAX_LIMIT) {
      target.value = "";
      alert("업로드 가능한 최대 용량은 5MB입니다. ");
      return;
    }
    // 유효성검증 완료
    setBackgroundImageFile(files);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setElementList((prev: any) => {
      return prev.map((e: iElement) => {
        return e.label === label ? { ...e, text: event.target.value } : e;
      });
    });
  };

  const fileUploadHandler = () => {
    if (backgroundImageFile !== undefined) {
      try {
        const formData = new FormData();
        formData.append("file", backgroundImageFile);
        alert("파일 업로드 성공!");
      } catch (e) {
        console.error(e);
        alert((e as { message: string }).message);
      }
    }
  };

  const onColorChange = (event: ColorPickerProps["value"]) => {
    setElementList((prev: any) => {
      return prev.map((e: iElement) => {
        return e.label === label ? { ...e, color: event } : e;
      });
    });
  };

  useEffect(() => {
    console.log(elementList[0].color);
  }, [elementList]);

  return (
    <div className="my-1 flex w-full justify-between">
      <span className="w-32 px-4 text-black">{label}</span>
      {label === "background" ? (
        <>
          <input
            className="w-[50%] text-black"
            onChange={fileUploadValidHandler}
            type="file"
          />
          <button
            className="w-24 rounded-6 bg-black p-10"
            onClick={fileUploadHandler}
          >
            upload
          </button>
        </>
      ) : (
        <input
          className="w-[70%] p-5 text-black drop-shadow-sm"
          onChange={onChange}
          value={text}
        />
      )}
      <ColorPicker value={color} onChange={onColorChange} />
    </div>
  );
}

export default CardInput;
