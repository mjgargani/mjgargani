import type React from 'react'

import { type CommonProps, PageEndPoints } from '../../../globals'

export type FrameProps = {
  page: PageEndPoints
  prevPage?: PageEndPoints
  bgMov?: number[][]
  style?: React.CSSProperties
} & CommonProps
