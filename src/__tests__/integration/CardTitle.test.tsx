import { render, screen, cleanup } from '@testing-library/react'
import CardTitle from '../../components/UI/molecules/CardTitle'
import { GitHubRepoItem } from '../../context/types'
import repos from '../mock/repos.json'

afterEach(cleanup)

test('verify if component receives `children` correctly', () => {
  const currentDataTestId = 'card-title_rtl'
  const repoItem = repos[0] as GitHubRepoItem;

  render(<CardTitle dataTestId={currentDataTestId}>{repoItem.name}</CardTitle>)

  const cardTitle = screen.getByTestId(currentDataTestId)
  const iconReplacer = screen.getByTestId(/^icon-replacer_\d+/)
  const archiveIcon = screen.getByTestId(/^icon-archive_\d+/)
  const phpIcon = screen.getByTestId(/^icon-php_\d+/)
  const wpIcon = screen.getByTestId(/^icon-wp_\d+/)

  expect(cardTitle).toBeInTheDocument()
  expect(iconReplacer).toBeInTheDocument()
  expect(archiveIcon).toBeInTheDocument()
  expect(phpIcon).toBeInTheDocument()
  expect(wpIcon).toBeInTheDocument()

  expect(cardTitle).toHaveTextContent('2018 portfolio')
})
