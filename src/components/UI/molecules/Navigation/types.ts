import React from "react";

export interface NavigationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}