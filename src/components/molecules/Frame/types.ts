import type React from 'react'
import { type CommonProps } from '../../../globals'

export type FrameProps = {
  page: number
  prevPage?: number
  style?: React.CSSProperties
} & CommonProps
