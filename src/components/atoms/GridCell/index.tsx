import React, { type PropsWithChildren } from 'react'

import randomId from '../../../utils/randomId'
import { Container } from './styles'
import { type GridCellProps } from './types'

const GridCell: React.FC<PropsWithChildren<GridCellProps>> = ({
  dataTestId = randomId('grid-cell'),
  bgImg = {
    source: '',
    size: 'contain',
  },
  area = ['auto'],
  styledCss,
  children,
}) => (
  <Container data-testid={dataTestId} area={area} bgImg={bgImg} styledCss={styledCss}>
    {children}
  </Container>
)

export default GridCell
