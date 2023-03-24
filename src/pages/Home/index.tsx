import React from 'react'

import Page from '../../components/templates/Page'
import { type PageProps } from '../../components/templates/Page/types'
import randomId from '../../utils/randomId'
import { Container } from './styles'

const Home: React.FC<PageProps> = ({ dataTestId = randomId('page-home'), show = true }) => (
  <Page show={show}>
    <Container data-testid={dataTestId}>
      <h1>mjgargani's Lab <span style={{ color: 'darkblue' }}></span></h1>
    </Container>
  </Page>
)

export default Home
