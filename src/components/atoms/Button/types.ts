import { type CommonProps } from '../../../globals';

export type ButtonProps = {
  icon?: React.ReactNode;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
} & CommonProps;
