import { CommonProps } from "../../../../types";

export interface ButtonProps extends CommonProps {
  active?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}