export interface ButtonProps {
  backgroundColor?: string;
  hoverColor?: string;
  active?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}