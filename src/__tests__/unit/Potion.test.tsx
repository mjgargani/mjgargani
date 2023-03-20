import { render, screen, cleanup } from '@testing-library/react'
import Potion from '../../components/atoms/Potion'
import { transparencyAlpha } from '../../components/atoms/Potion/styles'
import potionImg from '../../assets/potion.png'

afterEach(cleanup)

test('verify if component receives the `transparent` prop correctly', async () => {
  const currentDataTestId = 'potion__rtl'

  render(<Potion src={potionImg} dataTestId={currentDataTestId} transparent={true} />)

  const potion = await screen.findByTestId(currentDataTestId)

  expect(potion).toBeInTheDocument()
  expect(potion).toHaveStyle(`opacity: ${transparencyAlpha[0]}`)
})
