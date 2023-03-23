import type React from 'react'

import { Color, type CommonProps } from '../../../globals'


export type IconReplacerProps = {
  text: string
  darker?: boolean
  style?: React.CSSProperties
} & CommonProps

export type IconList = Record<string, [color: Color, icon: JSX.Element]>
