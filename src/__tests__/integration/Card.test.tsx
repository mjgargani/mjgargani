import { cleanup, render, screen } from '@testing-library/react'

import Card from '../../components/molecules/Card'
import { type CardProps } from '../../components/molecules/Card/types'
import { GitHubRepoItem } from '../../context/types'
import repos from '../mock/repos.json'

afterEach(cleanup)

test('verify if component receives child components and `content` prop correctly', () => {
  const currentDataTestId = 'card_rtl'
  const repoItem = repos[0] as Partial<GitHubRepoItem>
  const props: CardProps = {
    bgImg: {
      source: `https://raw.githubusercontent.com/mjgargani/${repoItem.name}/main/thumbnail.gif`,
      new: true,
      pinned: true,
      stars: 1,
      watchers: 0,
    },
    title: 'Teste RTL',
    isContent: false,
    url: repoItem.html_url,
  }
  const expectedText = 'Descrição do card'

  render(
    <Card
      dataTestId={currentDataTestId}
      bgImg={props.bgImg}
      title={props.title}
      isContent={props.isContent}
      url={props.url}
    >
      {expectedText}
    </Card>,
  )

  const card = screen.getByTestId(currentDataTestId)
  const cardLink = screen.getByTestId(/^card-link_\d+/)
  const cardThumb = screen.getByTestId(/^card-thumb_\d+/)
  const cardTitle = screen.getByTestId(/^card-title_\d+/)
  const cardDescription = screen.getByTestId(/^card-desc_\d+/)

  expect(card).toBeInTheDocument()
  expect(cardThumb).toBeInTheDocument()
  expect(cardTitle).toBeInTheDocument()
  expect(cardDescription).toBeInTheDocument()

  expect(cardThumb).toHaveStyle(`background-image: url(${props.bgImg?.source})`)
  expect(card).toHaveTextContent(props.title!)
  expect(card).toHaveTextContent(expectedText)
  expect(cardLink).toHaveAttribute('href', props.url)
})
