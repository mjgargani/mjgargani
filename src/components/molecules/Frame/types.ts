import type React from 'react'

import { PageEndPoints, type CommonProps } from '../../../globals'

export type FrameProps = {
  page: PageEndPoints
  prevPage?: PageEndPoints
  style?: React.CSSProperties
} & CommonProps
