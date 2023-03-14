import React from 'react'
import { type CommonProps } from '../../../../globals'
import { testIdName } from '../../../utils/testIdName'

import { Container, Potion } from './styles'

const Loading: React.FC<CommonProps> = ({ dataTestId = testIdName('loading') }) => (
  <Container data-testid={dataTestId}>
    <Potion></Potion>
  </Container>
)

export default Loading
