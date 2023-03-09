import React from "react";

export interface FlexContainerProps {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  style?: React.CSSProperties;
}