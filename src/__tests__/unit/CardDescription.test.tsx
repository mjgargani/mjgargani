import { render, screen, cleanup } from '@testing-library/react'
import CardDescription from '../../components/UI/atoms/CardDescription'

afterEach(cleanup)

test('verify if component receives the `children` correctly', () => {
  const currentDataTestId = 'card-desc__rtl'
  const expectedText = 'Teste com RTL'

  render(<CardDescription dataTestId={currentDataTestId}>{expectedText}</CardDescription>)

  const cardDesc = screen.getByTestId(currentDataTestId)

  expect(cardDesc).toBeInTheDocument()
  expect(cardDesc).toHaveTextContent(expectedText)
})
