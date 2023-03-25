import React, { type PropsWithChildren } from 'react'
import { css } from 'styled-components'

import randomId from '../../../utils/randomId'
import IconReplacer from '../IconReplacer'
import { Container, Title } from './styles'
import { CardTitleProps } from './types'

const replaceRegExpTitle = new RegExp('.+(?<=_)', 'gi')
const replaceRegExpIcons = new RegExp('(?=_).+', 'gi')

const CardTitle: React.FC<PropsWithChildren<CardTitleProps>> = ({
  dataTestId = randomId('card-title'),
  isContent = false,
  styledCss,
  children,
}) => (
  <Container isContent={isContent} data-testid={dataTestId} styledCss={styledCss}>
    <Title>
      {(children as string).replaceAll(replaceRegExpTitle, '').replaceAll('-', ' ')}
      <br />
      <IconReplacer text={(children as string).replaceAll(replaceRegExpIcons, '')} darker={true} />
    </Title>
  </Container>
)

export default CardTitle
