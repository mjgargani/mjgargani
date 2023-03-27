import { cleanup, screen } from '@testing-library/react'

import potionImg from '../../assets/potion.png'
import Potion from '../../components/atoms/Potion'
import { PageEndPoints } from '../../globals'
import potionStyles from '../../styles/defaults/potion'
import { render } from '../utils/render'

afterEach(cleanup)

test.each([
  [false, '/'],
  [true, '/projects'],
])(
  'verify if component receives the `transparent` prop correctly (value: %p)',
  async (transparent, page) => {
    const currentDataTestId = 'potion__rtl'

    render(<Potion src={potionImg} dataTestId={currentDataTestId} transparent={transparent} />)

    const potion = await screen.findByTestId(currentDataTestId)

    expect(potion).toBeInTheDocument()
    expect(potion).toHaveStyle(`opacity: ${potionStyles[page as PageEndPoints].opacity}`)
  },
)
