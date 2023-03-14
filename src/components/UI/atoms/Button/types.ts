import { type CommonProps } from '../../../../fonts'

export type ButtonProps = {
  active?: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
} & CommonProps
