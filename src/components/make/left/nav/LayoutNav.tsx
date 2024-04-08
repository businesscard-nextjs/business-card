"use client";
import { useRecoilState } from "recoil";
import { rc_direction, rc_layout } from "@/src/components/make/left/leftAtom";
import { Radio } from "antd";

export default function LayoutNav() {
  const [direction, setDirection] = useRecoilState(rc_direction);
  const [layout, setLayout] = useRecoilState(rc_layout);

  return (
    <div className="flex flex-col gap-40">
      {/* 방향 */}
      <div className="flex flex-col gap-24">
        <div className="text-20 text-main3">Direction</div>
        <Radio.Group
          onChange={(e) => setDirection(e.target.value)}
          defaultValue="vertical"
        >
          <Radio checked value="vertical">
            <span className="text-main3">Vertical</span>
          </Radio>
          <Radio value="horizonal">
            <span className="text-main3">Horizonal</span>
          </Radio>
        </Radio.Group>
      </div>

      {/* 레이아웃 */}
      <div className="flex flex-col gap-24">
        <div className="text-20 text-main3">Layouts</div>
        <Radio.Group
          onChange={(e) => setLayout(e.target.value)}
          defaultValue="layout1"
        >
          <Radio checked value="layout1">
            <span className="text-main3">layout1</span>
          </Radio>
          <Radio value="layout2">
            <span className="text-main3">layout2</span>
          </Radio>
          <Radio value="layout3">
            <span className="text-main3">layout3</span>
          </Radio>
        </Radio.Group>
      </div>
    </div>
  );
}
