import { atom } from "recoil";
import background from "@/public/landing_bg.svg"
export interface iElement {
  label: string;
  text: string;
  color: string;
}
export const rc_elementList = atom<iElement[]>({
  key: "rc_elementList",
  default: [
    { label: "name", text: "", color: "#000" },
    { label: "address", text: "", color: "#000" },
  ],
});

export const rc_direction = atom<string>({
  key: "rc_direction",
  default: "vertical",
});

export const rc_imageFile = atom<File>({
  key: "rc_image_file",
  default: background,
})