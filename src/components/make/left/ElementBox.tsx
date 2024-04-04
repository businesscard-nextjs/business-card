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
    <div className="flex justify-center items-center">
      <div
        onClick={onClick}
        className={`w-max min-w-[60px] p-2 rounded-[50px] cursor-pointer text-center shadow`}
        style={{ color: textColor, backgroundColor: bgColor }}
      >
        {children}
      </div>
    </div>
  );
}

export default ElementBox;
