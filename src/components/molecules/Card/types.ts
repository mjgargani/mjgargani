import { type CommonProps } from '../../../globals'

export type CardProps = {
  bgImg?: string
  url?: string
  title?: string
  isContent?: boolean
  style?: React.CSSProperties
} & CommonProps
