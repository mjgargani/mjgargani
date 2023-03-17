import React, { useContext } from 'react'
import GridCell from '../../components/atoms/GridCell'
import Card from '../../components/molecules/Card'
import GridContainer from '../../components/atoms/GridContainer'

import Page from '../../components/templates/Page'
import { type PageProps } from '../../components/templates/Page/types'
import { GitHubDataContext } from '../../context/GitHubData'
import mdParser from '../../utils/mdParser'
import { testIdName } from '../../utils/testIdName'
import { GitHubRepoItem } from '../../context/types'

const Repos: React.FC<PageProps> = ({ dataTestId = testIdName('page-repos'), show }) => {
  const { repos } = useContext(GitHubDataContext)

  const RepoItem = (el: GitHubRepoItem | undefined, i: number,) => (
    <GridCell key={i}>
      <Card
        bgImg={{
          source: el!.thumbnail,
          new: el!.new,
          pinned: el!.pinned,
          stars: el!.stargazers_count,
          watchers: el!.watchers_count
        }}
        url={el!.html_url}
        title={
          el!.name === 'mjgargani'
            ? 'nodejs-typescript-reactjs-styledcomponents_2023-portfolio'
            : el!.name
        }
      >
        {mdParser(el!.description)}
      </Card>
    </GridCell>
  )

  return (
    <Page show={show}>
      <GridContainer
        dataTestId={dataTestId}
        templateColumns={{
          desktop: ['repeat(3, 1fr)'],
        }}
        columnGap={4}
        rowGap={2}
      >
        {repos &&
          repos.length > 0 &&
          [
            repos
              .sort((a, b) => (a!.id < b!.id ? 1 : -1))
              .filter(el => el?.pinned)
              .map((el, i) => RepoItem(el, i)),
            repos
              .sort((a, b) => (a!.id < b!.id ? 1 : -1))
              .filter(el => !el?.pinned)
              .map((el, i) => RepoItem(el, i))
          ]}
      </GridContainer>
    </Page>
  )
}

export default Repos
