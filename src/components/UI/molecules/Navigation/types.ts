import type React from 'react'
import { CommonProps } from '../../../../fonts'

export type NavigationProps = {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
} & CommonProps
