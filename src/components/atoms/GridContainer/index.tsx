import randomId from '../../../utils/randomId';
import { Container } from './styles';
import { type GridContainerProps } from './types';
import React, { type PropsWithChildren } from 'react';

const GridContainer: React.FC<PropsWithChildren<GridContainerProps>> = ({
  dataTestId = randomId('grid-container'),
  templateColumns,
  templateRows,
  columnGap = 0,
  rowGap = 0,
  styledCss,
  children,
}) => (
  <Container
    data-testid={dataTestId}
    templateColumns={templateColumns}
    templateRows={templateRows}
    columnGap={columnGap}
    rowGap={rowGap}
    styledCss={styledCss}
  >
    {children}
  </Container>
);

export default GridContainer;
