import { render, screen, cleanup } from '@testing-library/react'
import Frame from '../../components/UI/molecules/Frame'
import { linearGradientColors, shadowAlpha } from '../../components/UI/molecules/Frame/styles'
import { transparencyAlpha } from '../../components/UI/atoms/Potion/styles'

afterEach(cleanup)

test('verify if component shows child components correctly', () => {
  const currentDataTestId = 'frame_rtl'

  render(<Frame dataTestId={currentDataTestId} page={0} />)

  const frame = screen.getByTestId(currentDataTestId)
  const tiles = screen.getByTestId(/^frame-tiles_\d+/)
  const shadow = screen.getByTestId(/^frame-shadow_\d+/)
  const potion = screen.getByTestId(/^potion_\d+/)
  const footerInfo = screen.getByTestId(/^footer-info_\d+/)

  expect(frame).toBeInTheDocument()
  expect(tiles).toBeInTheDocument()
  expect(shadow).toBeInTheDocument()
  expect(potion).toBeInTheDocument()
  expect(footerInfo).toBeInTheDocument()
})

test.each([
  [0, transparencyAlpha[1]],
  [1, transparencyAlpha[0]],
  [2, transparencyAlpha[0]],
])(
  'verify if components changes when the `page` prop changes (value: %p)',
  (page, potionOpacity) => {
    const currentDataTestId = 'frame_rtl'

    render(<Frame dataTestId={currentDataTestId} page={page} />)

    const frame = screen.getByTestId(currentDataTestId)
    expect(frame).toBeInTheDocument()

    const shadow = screen.getByTestId(/^frame-shadow_\d+/)
    const potion = screen.getByTestId(/^potion_\d+/)

    expect(frame).toHaveStyle(
      `background: linear-gradient(315deg, ${linearGradientColors[page].join(', ')});`,
    )
    expect(shadow).toHaveStyle(`opacity: ${shadowAlpha[page]}`)
    expect(potion).toHaveStyle(`opacity: ${potionOpacity}`)
  },
)
