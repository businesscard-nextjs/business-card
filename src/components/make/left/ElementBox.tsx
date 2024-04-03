import React, { MouseEventHandler } from "react";

type elementBoxProps = {
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
  onClick: any;
};

function ElementBox({
  children,
  bgColor,
  textColor,
  onClick,
}: elementBoxProps) {
  return (
    <div
      onClick={onClick}
      className={`w-max min-w-[100px] p-2 rounded-[50px] text-[${textColor}] gap-4 bg-[${bgColor}] cursor-pointer`}
    >
      {children}
    </div>
  );
}

export default ElementBox;
