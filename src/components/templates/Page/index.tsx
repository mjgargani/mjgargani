import React, { type PropsWithChildren, useContext } from 'react'
import { GitHubDataContext } from '../../../context/GitHubData'
import { testIdName } from '../../../utils/testIdName'
import Loading from '../../atoms/Loading'

import { Container } from './styles'
import { type PageProps } from './types'

const Page: React.FC<PropsWithChildren<PageProps>> = ({
  dataTestId = testIdName('page'),
  show = false,
  children,
}) => {
  const { loading } = useContext(GitHubDataContext)

  return (
    <Container data-testid={dataTestId} show={show}>
      {loading && <Loading />}
      {!loading && show && children}
    </Container>
  )
}

export default Page
