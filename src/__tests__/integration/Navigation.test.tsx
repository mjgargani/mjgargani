import { cleanup, render, screen } from '@testing-library/react'

import Navigation from '../../components/molecules/Navigation'

afterEach(cleanup)

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

test.each([
  [0, 'white', 'white', 'white'],
  [1, 'white', 'black', 'white'],
  [2, 'white', 'white', 'black'],
])(
  'verify if component shows child components correctly (page: %p)',
  (page, color1, color2, color3) => {
    const currentDataTestId = 'navigation_rtl'

    render(<Navigation dataTestId={currentDataTestId} page={page} />)

    const navigation = screen.getByTestId(currentDataTestId)
    const buttons = screen.getAllByTestId(/^btn-nav_\d+/)

    expect(navigation).toBeInTheDocument()
    expect(buttons[0]).toBeInTheDocument()
    expect(buttons[1]).toBeInTheDocument()
    expect(buttons[2]).toBeInTheDocument()

    expect(buttons[0]).toHaveTextContent('Início')
    expect(buttons[1]).toHaveTextContent('Projetos')
    expect(buttons[2]).toHaveTextContent('Sobre')

    expect(buttons[0]).toHaveStyle(`color: ${color1}`)
    expect(buttons[1]).toHaveStyle(`color: ${color2}`)
    expect(buttons[2]).toHaveStyle(`color: ${color3}`)
  },
)
