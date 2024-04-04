import { ChildProps } from "postcss";
import React from "react";
import BoxLayout from "./BoxLayout";

function Header(props: ChildProps) {
  return (
    <BoxLayout bgColor="#130912" margin="0px auto 20px">
      Let's generate your own business card !
    </BoxLayout>
  );
}

export default Header;
