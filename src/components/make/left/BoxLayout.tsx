import React, { PropsWithChildren, ReactChildren } from "react";

type boxProps = {
  children: React.ReactNode;
  bgColor: string;
  margin: string;
};

function BoxLayout({ children, bgColor, margin }: PropsWithChildren<boxProps>) {
  return (
    <div
      className={`w-[80%] bg-[${bgColor}] flex justify-around items-center text-white mx-auto my-[${margin}] p-4`}
    >
      {children}
    </div>
  );
}

export default BoxLayout;
