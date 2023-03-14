import React from 'react'
import { testIdName } from '../../../utils/testIdName'
import { Container } from './styles'
import { type CardThumbnailProps } from './types'

const CardThumbnail: React.FC<CardThumbnailProps> = ({
  dataTestId = testIdName('card-thumb'),
  bgImg = '',
}) => (
  <>
    <Container data-testid={dataTestId} bgImg={bgImg} />
  </>
)

export default CardThumbnail
