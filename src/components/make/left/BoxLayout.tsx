import React, { PropsWithChildren, ReactChildren } from "react";

type boxProps = {
  children: React.ReactNode;
  bgColor: string;
  margin: string;
};

function BoxLayout({ children, bgColor, margin }: PropsWithChildren<boxProps>) {
  return (
    <div
      className={`mx-auto flex w-[80%] items-center justify-around rounded-6 p-20 text-white drop-shadow-sm`}
      style={{ backgroundColor: bgColor, margin }}
    >
      {children}
    </div>
  );
}

export default BoxLayout;
