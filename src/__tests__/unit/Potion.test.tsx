import { cleanup, render, screen } from '@testing-library/react'

import potionImg from '../../assets/potion.png'
import Potion from '../../components/atoms/Potion'
import { transparencyAlpha } from '../../components/atoms/Potion/styles'

afterEach(cleanup)

test('verify if component receives the `transparent` prop correctly', async () => {
  const currentDataTestId = 'potion__rtl'

  render(<Potion src={potionImg} dataTestId={currentDataTestId} transparent={true} />)

  const potion = await screen.findByTestId(currentDataTestId)

  expect(potion).toBeInTheDocument()
  expect(potion).toHaveStyle(`opacity: ${transparencyAlpha[0]}`)
})
