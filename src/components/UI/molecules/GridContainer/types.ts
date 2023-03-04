import React from "react";

export interface GridContainerProps {
  templateColumns?: {
    mobile?: string[];
    desktop?: string[];
  },
  templateRows?: {
    mobile?: string[];
    desktop?: string[];
  },
  columnGap?: number;
  rowGap?: number;
  style?: React.CSSProperties;
}