import { atom } from "recoil";
import background from "@/public/images/landing_bg.svg";
export interface iElement {
  label: string;
  text: string;
  color: string;
  placeholder: string;
  header: string;
}
export const rc_elementList = atom<iElement[]>({
  key: "rc_elementList",
  default: [
    { label: "name", text: "", color: "#000", placeholder: "Name", header: "" },
    {
      label: "position",
      text: "",
      color: "#000",
      placeholder: "position",
      header: "",
    },
    {
      label: "address",
      text: "",
      color: "#000",
      placeholder: "Moranero 3gil 11",
      header: "",
    },
    {
      label: "email",
      text: "",
      color: "#000",
      placeholder: "jungwon0508@naver.com",
      header: "E-mail.",
    },
  ],
});

export const rc_direction = atom<string>({
  key: "rc_direction",
  default: "vertical",
});

export const rc_imageFile = atom<File>({
  key: "rc_image_file",
  default: background,
});
