import React, { type PropsWithChildren } from 'react'

import randomId from '../../../utils/randomId'
import { Container } from './styles'
import { CardDescriptionProps } from './types'

const CardDescription: React.FC<PropsWithChildren<CardDescriptionProps>> = ({
  dataTestId = randomId('card-desc'),
  isContent = false,
  children,
}) => (
  <Container isContent={isContent} data-testid={dataTestId}>
    {children}
  </Container>
)

export default CardDescription
