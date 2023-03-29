import randomId from '../../../utils/randomId';
import { Container } from './styles';
import { type GridCellProps } from './types';
import React, { type PropsWithChildren } from 'react';

const GridCell: React.FC<PropsWithChildren<GridCellProps>> = ({
  dataTestId = randomId('grid-cell'),
  bgImg = {
    source: '',
    size: 'contain',
  },
  styledCss,
  children,
}) => (
  <Container data-testid={dataTestId} bgImg={bgImg} styledCss={styledCss}>
    {children}
  </Container>
);

export default GridCell;
