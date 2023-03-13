import { CommonProps } from "../../../../types";

export interface CardProps extends CommonProps {
  bgImg?: string;
  url?: string;
  title?: string;
  content: boolean;
}