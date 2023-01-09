// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TanksvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TanksvgIcon(props: TanksvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "icon icon-tabler icon-tabler-tank"
      )}
      strokeWidth={"2"}
      stroke={"currentColor"}
      fill={"none"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h24v24H0z"} fill={"none"} stroke={"none"}></path>

      <rect x={"2"} y={"12"} width={"18"} height={"6"} rx={"3"}></rect>

      <path d={"M6 12l1-5h5l3 5m6-3h-7.8"}></path>
    </svg>
  );
}

export default TanksvgIcon;
/* prettier-ignore-end */
