import { cleanup, render, screen } from '@testing-library/react'

import CardThumbnail from '../../components/atoms/CardThumbnail'
import { GitHubRepoItem } from '../../context/types'
import repos from '../mock/repos.json'

afterEach(cleanup)

test('verify if component receives the `bgImg` prop correctly', () => {
  const currentDataTestId = 'card-thumb__rtl'
  const repoItem = repos[0] as Partial<GitHubRepoItem>
  const expectedBgImg = `https://raw.githubusercontent.com/mjgargani/${repoItem.name}/main/thumbnail.gif`

  render(
    <CardThumbnail
      dataTestId={currentDataTestId}
      bgImg={{
        source: expectedBgImg,
        new: true,
        pinned: true,
        stars: 1,
        watchers: 0,
      }}
    />,
  )

  const cardThumb = screen.getByTestId(currentDataTestId)
  const cardThumbNew = screen.getByTestId(/^card-thumb-is-new_\d+/)
  const cardThumbPinned = screen.getByTestId(/^card-thumb-is-pinned_\d+/)
  const cardThumbStars = screen.getByTestId(/^card-thumb-stars_\d+/)
  const cardThumbStarsCount = screen.getByTestId(/^card-thumb-stars_\d+/)
  const cardThumbWatchers = screen.getByTestId(/^card-thumb-watchers_\d+/)
  const cardThumbWatchersCount = screen.getByTestId(/^card-thumb-watchers_\d+/)

  expect(cardThumb).toBeInTheDocument()
  expect(cardThumb).toHaveStyle(`background-image: url(${expectedBgImg})`)
  expect(cardThumbNew).toBeInTheDocument()
  expect(cardThumbPinned).toBeInTheDocument()
  expect(cardThumbStars).toBeInTheDocument()
  expect(cardThumbStarsCount).toHaveTextContent('1')
  expect(cardThumbWatchers).toBeInTheDocument()
  expect(cardThumbWatchersCount).toHaveTextContent('0')
})
