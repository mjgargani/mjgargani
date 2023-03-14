import type React from 'react'
import { type CommonProps } from '../../../globals'

export type GridCellProps = {
  bgImg?: {
    source?: string
    size?: 'contain' | 'cover'
  }
  area?: Array<number | string>
  style?: React.CSSProperties
} & CommonProps
