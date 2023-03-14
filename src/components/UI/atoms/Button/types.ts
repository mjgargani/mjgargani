import { type CommonProps } from '../../../../globals'

export type ButtonProps = {
  active?: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
} & CommonProps
