"use client";

import React, { useState } from "react";

interface Props {
  nav: {
    nav: string;
    icon: JSX.Element;
    compo: JSX.Element;
    title: string;
    subtitle: string;
  };
  selectNav: string;
}

export default function NavBox({ nav, selectNav }: Props) {
  return (
    <div
      className={`flex h-[48px] w-[48px] cursor-pointer flex-col items-center justify-center rounded-10 ${selectNav === nav.nav ? "border border-main2 shadow-layoutNav" : ""}`}
    >
      <div>
        {React.cloneElement(nav.icon, {
          color: selectNav === nav.nav ? "#E6842D" : "#130912",
        })}
      </div>
      <div
        className={`text-12 font-semibold ${selectNav === nav.nav ? "text-main2" : "text-main3"}`}
      >
        {nav.nav}
      </div>
    </div>
  );
}
