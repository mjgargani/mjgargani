export interface ButtonProps {
  dataTestId?: string,
  active?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}