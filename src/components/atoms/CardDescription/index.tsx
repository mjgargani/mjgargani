import React, { type PropsWithChildren } from 'react'

import randomId from '../../../utils/randomId'
import { Container, InnerContainer } from './styles'
import { CardDescriptionProps } from './types'

const CardDescription: React.FC<PropsWithChildren<CardDescriptionProps>> = ({
  dataTestId = randomId('card-desc'),
  isContent = false,
  styledCss,
  children,
}) => (
  <Container isContent={isContent} data-testid={dataTestId} styledCss={styledCss}>
    <InnerContainer isContent={isContent}>{children}</InnerContainer>
  </Container>
)

export default CardDescription
