import { type CommonProps } from '../../../globals'

export type CardThumbnailProps = {
  bgImg?: {
    source: string
    new?: boolean
    pinned?: boolean
    stars?: number
    watchers?: number
  }
} & CommonProps
