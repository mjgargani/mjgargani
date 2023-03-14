import { type CommonProps } from '../../../../fonts'

export type CardProps = {
  bgImg?: string
  url?: string
  title?: string
  content?: 0 | 1
} & CommonProps
