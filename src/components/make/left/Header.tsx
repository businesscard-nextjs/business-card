import { ChildProps } from "postcss";
import React from "react";
import BoxLayout from "./BoxLayout";

function Header(props: ChildProps) {
  return (
    <BoxLayout bgColor="#936E6E" margin="40px"> 헤더 로고 및 어쩌구</BoxLayout>
  );
}

export default Header;
