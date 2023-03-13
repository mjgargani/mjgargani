import React, { PropsWithChildren } from "react";
import { testIdName } from "../../../utils/testIdName";

import { Container } from "./styles";
import { GridContainerProps } from "./types";

const GridContainer: React.FC<PropsWithChildren<GridContainerProps>> = ({
  dataTestId = testIdName("grid-container"),
  templateColumns,
  templateRows,
  columnGap = 0,
  rowGap = 0,
  style,
  children
}) => <Container
  data-testid={dataTestId}
  templateColumns={templateColumns}
  templateRows={templateRows}
  columnGap={columnGap}
  rowGap={rowGap}
  style={style}
>
  {children}
</Container>;

export default GridContainer;