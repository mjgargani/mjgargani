import type React from 'react'
import { type CommonProps } from '../../../../fonts'

export type GridContainerProps = {
  templateColumns?: {
    mobile?: string[]
    desktop?: string[]
  }
  templateRows?: {
    mobile?: string[]
    desktop?: string[]
  }
  columnGap?: number
  rowGap?: number
  style?: React.CSSProperties
} & CommonProps
