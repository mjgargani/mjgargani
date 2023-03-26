import { AlphaRange, PageEndPoints } from '../../globals'

export type PotionDefaults = {
  [key in PageEndPoints]: {
    opacity: AlphaRange
  }
}

const defaults: PotionDefaults = {
  '/': {
    opacity: 1,
  },
  '/projects': {
    opacity: 0.1,
  },
  '/about': {
    opacity: 0.1,
  },
}

export default defaults
