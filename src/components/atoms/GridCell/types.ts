import { type CommonProps } from '../../../globals'

export type GridCellProps = {
  bgImg?: {
    source?: string
    size?: 'contain' | 'cover'
  }
  area?: Array<number | string>
} & CommonProps
