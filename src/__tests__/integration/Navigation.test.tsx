import { cleanup, screen } from '@testing-library/react'

import Navigation from '../../components/molecules/Navigation'
import { PageEndPoints } from '../../globals'
import { render } from '../utils/render'

afterEach(cleanup)

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}))

test.each([
  ['/', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)'],
  ['/projects', 'rgb(255, 255, 255)', 'rgb(0, 0, 0)', 'rgb(255, 255, 255)'],
  ['/about', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)', 'rgb(0, 0, 0)'],
])(
  'verify if component shows child components correctly (page: %p)',
  (page, color1, color2, color3) => {
    const currentPage = page as PageEndPoints
    const currentDataTestId = 'navigation_rtl'

    render(<Navigation dataTestId={currentDataTestId} page={currentPage} />)

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
