"use client";

import React, { useState } from "react";
import LayoutIcon from "@/src/components/icons/LayoutIcon";
import LogoIcon from "@/src/components/icons/LogoIcon";
import TextIcon from "@/src/components/icons/TextIcon";
import ColorIcon from "@/src/components/icons/ColorIcon";
import LayoutNav from "@/src/components/make/left/nav/LayoutNav";
import LogoNav from "@/src/components/make/left/nav/LogoNav";
import TextNav from "@/src/components/make/left/nav/TextNav";
import ColorNav from "@/src/components/make/left/nav/ColorNav";

interface NavItem {
  nav: string;
  icon: JSX.Element;
  compo: JSX.Element;
  title: string;
  subtitle: string;
}

function LeftContainer() {
  const [selectNav, setSelectNav] = useState("layout");

  // nav 목록
  const navList: NavItem[] = [
    {
      nav: "layout",
      icon: <LayoutIcon color="#130912" />,
      compo: <LayoutNav />,
      title: "Layout",
      subtitle: "select your card’s layout!",
    },
    {
      nav: "logo",
      icon: <LogoIcon color="#130912" />,
      compo: <LogoNav />,
      title: "Logo",
      subtitle: "insert your company's logo or customize it!",
    },
    {
      nav: "text",
      icon: <TextIcon color="#130912" />,
      compo: <TextNav />,
      title: "Text",
      subtitle: "fill in your business card!",
    },
    {
      nav: "color",
      icon: <ColorIcon color="#130912" />,
      compo: <ColorNav />,
      title: "Color",
      subtitle: "custom your business card back side!",
    },
  ];

  return (
    <div className="flex min-h-screen flex-[1.5_1.5_0%] bg-white">
      {/* 왼쪽 nav */}
      <div className="flex h-full w-[80px] flex-col rounded-14 px-12 py-30 shadow-makeNav">
        <div className="flex w-full flex-col items-center gap-30">
          {navList.map((nav, i) => {
            return (
              <div
                onClick={() => setSelectNav(nav.nav)}
                key={`navList-${i}`}
                className={`flex h-[48px] w-[48px] cursor-pointer flex-col items-center justify-center rounded-10 ${selectNav === nav.nav ? "shadow-layoutNav border border-main2" : ""}`}
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
          })}
        </div>
      </div>
      {/* nav별 커스텀 화면 */}
      {navList.map((nav, i) =>
        nav.nav === selectNav ? (
          <div
            key={`navLayout-${i}`}
            className="flex h-full w-full flex-col gap-50 p-20"
          >
            <div className="flex w-full flex-col gap-2 border-b border-b-main3 py-14">
              <div className="text-24 font-semibold text-main3">
                {nav.title}
              </div>
              <div className="text-14 text-main3">{nav.subtitle}</div>
            </div>
            {nav.compo}
          </div>
        ) : null,
      )}
    </div>
  );
}

export default LeftContainer;
