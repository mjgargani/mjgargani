import React from "react";
import { CommonProps } from "../../../../types";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export interface IconReplacerProps extends CommonProps {
  text: string;
  darker?: boolean;
  style?: React.CSSProperties;
}

export interface IconList {
  [key: string]: [color: Color, icon: JSX.Element]
}
