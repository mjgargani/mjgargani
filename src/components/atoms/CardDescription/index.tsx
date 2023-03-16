import React, { type PropsWithChildren } from 'react'
import { testIdName } from '../../../utils/testIdName'
import { Container } from './styles'
import { CardDescriptionProps } from './types'

const CardDescription: React.FC<PropsWithChildren<CardDescriptionProps>> = ({
  dataTestId = testIdName('card-desc'),
  children,
}) => <Container data-testid={dataTestId}>{children}</Container>

export default CardDescription
