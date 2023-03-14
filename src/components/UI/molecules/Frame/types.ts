import type React from 'react'
import { CommonProps } from '../../../../fonts'

export type FrameProps = {
  page: number
  prevPage?: number
  style?: React.CSSProperties
} & CommonProps
