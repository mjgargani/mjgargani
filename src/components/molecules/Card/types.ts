import { type CommonProps } from '../../../globals'

export type CardProps = {
  bgImg?: {
    source: string,
    new?: boolean,
    pinned?: boolean,
    stars?: number,
    watchers?: number
  }
  url?: string
  title?: string
  isContent?: boolean
  style?: React.CSSProperties
} & CommonProps
