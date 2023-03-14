import { render, screen, cleanup } from '@testing-library/react'
import CardThumbnail from '../../components/atoms/CardThumbnail'
import { GitHubRepoItem } from '../../context/types'
import repos from '../mock/repos.json'

afterEach(cleanup)

test('verify if component receives the `bgImg` prop correctly', () => {
  const currentDataTestId = 'card-thumb__rtl'
  const repoItem = repos[0] as Partial<GitHubRepoItem>
  const expectedBgImg = `https://raw.githubusercontent.com/mjgargani/${repoItem.name}/main/thumbnail.gif`

  render(<CardThumbnail dataTestId={currentDataTestId} bgImg={expectedBgImg} />)

  expect(screen.getByTestId(currentDataTestId)).toBeInTheDocument()
  expect(screen.getByTestId(currentDataTestId)).toHaveStyle(
    `background-image: url(${expectedBgImg})`,
  )
})
