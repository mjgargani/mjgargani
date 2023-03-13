import React from "react";
import { CommonProps } from "../../../../types";

export interface FrameProps extends CommonProps {
  page: number;
  prevPage?: number;
  style?: React.CSSProperties;
}