import React, { useContext } from 'react'
import GridCell from '../../components/atoms/GridCell'
import Card from '../../components/molecules/Card'
import GridContainer from '../../components/atoms/GridContainer'

import Page from '../../components/templates/Page'
import { type PageProps } from '../../components/templates/Page/types'
import { GitHubDataContext } from '../../context/GitHubData'
import mdParser from '../../utils/mdParser'
import { testIdName } from '../../utils/testIdName'

const Repos: React.FC<PageProps> = ({ dataTestId = testIdName('page-repos'), show }) => {
  const { repos } = useContext(GitHubDataContext)

  return (
    <Page show={show}>
      <GridContainer
        dataTestId={dataTestId}
        templateColumns={{
          desktop: ['repeat(3, 1fr)'],
        }}
        columnGap={30}
        rowGap={30}
      >
        {repos &&
          repos.length > 0 &&
          repos
            .sort((a, b) => (a!.id < b!.id ? 1 : -1))
            .map((el, i) => (
              <GridCell key={i}>
                <Card
                  bgImg={el!.thumbnail}
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
            ))}
      </GridContainer>
    </Page>
  )
}

export default Repos
