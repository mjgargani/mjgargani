import React from "react";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

export interface IconReplacerProps {
  text: string;
  darker?: boolean;
  style?: React.CSSProperties;
}

export interface IconList {
  [key: string]: [color: Color, icon: JSX.Element]
}
