import { type CommonProps } from '../../../globals'

export type GridCellProps = {
  bgImg?: {
    source?: string
    size?: 'contain' | 'cover'
  }
} & CommonProps
