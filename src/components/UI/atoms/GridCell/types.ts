import React from "react";
import { CommonProps } from "../../../../types";

export interface GridCellProps extends CommonProps {
  bgImg?: {
    source?: string;
    size?: "contain" | "cover"
  };
  area?: (number | string)[];
  style?: React.CSSProperties;
}