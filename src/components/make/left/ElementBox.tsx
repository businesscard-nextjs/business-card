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
    <div className="flex items-center justify-center">
      <div
        onClick={onClick}
        className={`shadow w-max min-w-[60px] cursor-pointer rounded-50 px-10 py-6 text-center`}
        style={{ color: textColor, backgroundColor: bgColor }}
      >
        {children}
      </div>
    </div>
  );
}

export default ElementBox;
