import React, { MouseEventHandler } from "react";

type elementBoxProps = {
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
  borderColor?: string;
  onClick: any;
};

function ElementBox({
  children,
  bgColor,
  textColor,
  borderColor,
  onClick,
}: elementBoxProps) {
  return (
    <div className="flex items-center justify-center">
      <div
        onClick={onClick}
        className="w-auto cursor-pointer rounded-10 px-12 py-6 text-center text-16"
        style={{
          color: textColor,
          backgroundColor: bgColor,
          border: `solid ${borderColor}`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default ElementBox;
