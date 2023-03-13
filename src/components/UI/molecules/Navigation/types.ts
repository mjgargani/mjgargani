import React from "react";
import { CommonProps } from "../../../../types";

export interface NavigationProps extends CommonProps{
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}