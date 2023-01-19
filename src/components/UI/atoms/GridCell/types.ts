import React from "react";

export interface GridCellProps {
  bgImg?: {
    source?: string;
    size?: "contain" | "cover"
  };
  area?: (number | string)[];
  style?: React.CSSProperties;
}