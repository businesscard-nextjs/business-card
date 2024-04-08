import { atom } from "recoil";
import background from "@/public/images/landing_bg.svg";
export interface iElement {
  label: string;
  text: string;
  color: string;
  placeholder: string;
  header: string;
}

// 명함 옵션 리스트
export const rc_elementList = atom<iElement[]>({
  key: "rc_elementList",
  default: [
    { label: "Name", text: "", color: "#000", placeholder: "Name", header: "" },
    {
      label: "Position",
      text: "",
      color: "#000",
      placeholder: "position",
      header: "",
    },
    {
      label: "Address",
      text: "",
      color: "#000",
      placeholder: "Moranero 3gil 11",
      header: "",
    },
    {
      label: "Email",
      text: "",
      color: "#000",
      placeholder: "jungwon0508@naver.com",
      header: "E-mail.",
    },
  ],
});

// 명함 방향
export const rc_direction = atom<string>({
  key: "rc_direction",
  default: "vertical",
});

// 명함 레이아웃
export const rc_layout = atom<string>({
  key: "rc_layout",
  default: "layout1",
});

// 명함 백그라운드 파일
export const rc_imageFile = atom<File>({
  key: "rc_image_file",
  default: background,
});

// 명함 로고 파일
export const rc_logoFile = atom<File>({
  key: "rc_logo_file",
  default: undefined,
});
