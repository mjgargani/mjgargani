import React from 'react'
import { testIdName } from '../../../utils/testIdName'

import { Container, Potion } from './styles'
import { LoadingProps } from './types'

const Loading: React.FC<LoadingProps> = ({
  dataTestId = testIdName('loading'),
  isCard = false,
}) => (
  <Container data-testid={dataTestId} isCard={isCard}>
    <Potion></Potion>
  </Container>
)

export default Loading
