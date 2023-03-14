import type React from 'react'
import { type CommonProps } from '../../../../fonts'

export type FrameProps = {
  page: number
  prevPage?: number
  style?: React.CSSProperties
} & CommonProps
