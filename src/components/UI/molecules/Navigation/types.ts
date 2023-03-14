import type React from 'react'
import { type CommonProps } from '../../../../globals'

export type NavigationProps = {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
} & CommonProps
