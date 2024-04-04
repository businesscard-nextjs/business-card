import { atom } from "recoil";
export interface iElement {
  label: string;
  text: string;
  isColorPicker: boolean;
}
export const rc_elementList = atom<iElement[]>({
  key: "rc_elementList",
  default: [
    { label: "name", text: "", isColorPicker: false },
    { label: "address", text: "", isColorPicker: false },
  ],
});
