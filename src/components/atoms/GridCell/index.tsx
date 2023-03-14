import React, { type PropsWithChildren } from 'react'
import { testIdName } from '../../../utils/testIdName'

import { Container } from './styles'
import { type GridCellProps } from './types'

const GridCell: React.FC<PropsWithChildren<GridCellProps>> = ({
  dataTestId = testIdName('grid-cell'),
  bgImg = {
    source: '',
    size: 'contain',
  },
  area = ['auto'],
  style,
  children,
}) => (
  <Container data-testid={dataTestId} area={area} bgImg={bgImg} style={style}>
    {children}
  </Container>
)

export default GridCell
