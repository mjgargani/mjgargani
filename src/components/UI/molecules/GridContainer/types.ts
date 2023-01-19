import React from "react";

export interface GridContainerProps {
  templateColumns?: number;
  templateRows?: number;
  columnGap?: number;
  rowGap?: number;
  style?: React.CSSProperties;
}