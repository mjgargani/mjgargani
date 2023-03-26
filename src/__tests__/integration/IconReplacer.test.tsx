import { cleanup, render, screen } from '@testing-library/react'

import IconReplacer from '../../components/molecules/IconReplacer'
import repos from '../mock/repos.json'

afterEach(cleanup)

test('verify if component receives `children` and render the icons correctly', () => {
  const currentDataTestId = 'icon-replacer_rtl'
  const projectName = repos[0].name

  render(<IconReplacer dataTestId={currentDataTestId} text={projectName} />)

  const iconReplacer = screen.getByTestId(currentDataTestId)
  const archiveIcon = screen.getByTestId(/^icon-archive_\d+/)
  const phpIcon = screen.getByTestId(/^icon-php_\d+/)
  const wpIcon = screen.getByTestId(/^icon-wp_\d+/)

  expect(iconReplacer).toBeInTheDocument()
  expect(archiveIcon).toBeInTheDocument()
  expect(phpIcon).toBeInTheDocument()
  expect(wpIcon).toBeInTheDocument()

  expect(iconReplacer).not.toHaveTextContent('_2018-portfolio')
})
