import React, { type PropsWithChildren, useContext } from 'react'

import { GitHubDataContext } from '../../../context/GitHubData'
import randomId from '../../../utils/randomId'
import Loading from '../../atoms/Loading'
import { Container } from './styles'
import { type PageProps } from './types'

const Page: React.FC<PropsWithChildren<PageProps>> = ({
  dataTestId = randomId('page'),
  show = false,
  styledCss,
  children,
}) => {
  const { loading } = useContext(GitHubDataContext)

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container data-testid={dataTestId} show={show} styledCss={styledCss}>
          {show && children}
        </Container>
      )}
    </>
  )
}

export default Page
