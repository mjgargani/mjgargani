import React from 'react'

import Page from '../../components/templates/Page'
import { CommonProps } from '../../globals'
import randomId from '../../utils/randomId'
import { Container } from './styles'

const Home: React.FC<CommonProps> = ({ dataTestId = randomId('page-home')}) => (
  <Page>
    <Container data-testid={dataTestId}>
      <h1>
        mjgargani's Lab <span style={{ color: 'darkblue' }}></span>
      </h1>
    </Container>
  </Page>
)

export default Home
