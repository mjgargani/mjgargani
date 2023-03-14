import type React from 'react'
import { type CommonProps } from '../../../../fonts'

type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`

export type Color = RGB | RGBA | HEX

export type IconReplacerProps = {
  text: string
  darker?: boolean
  style?: React.CSSProperties
} & CommonProps

export type IconList = Record<string, [color: Color, icon: JSX.Element]>
