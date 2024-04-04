import React, { PropsWithChildren, ReactChildren } from "react";

type boxProps = {
  children: React.ReactNode;
  bgColor: string;
  margin: string;
};

function BoxLayout({ children, bgColor, margin }: PropsWithChildren<boxProps>) {
  return (
    <div
      className={`w-[80%] flex justify-around items-center text-white mx-auto p-4`}
      style={{ backgroundColor: bgColor, margin }}
    >
      {children}
    </div>
  );
}

export default BoxLayout;
