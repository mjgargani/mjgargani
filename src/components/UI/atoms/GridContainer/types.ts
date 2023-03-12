import React from "react";
import { CommonProps } from "../../../../types";

export interface GridContainerProps extends CommonProps {
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