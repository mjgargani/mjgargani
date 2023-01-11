import React, { PropsWithChildren } from "react";

import { Container } from "./styles";
import { GridContainerProps } from "./types";

const Button: React.FC<PropsWithChildren<GridContainerProps>> = ({
  templateColumns = 1,
  templateRows = 1,
  columnGap = 0,
  rowGap = 0,
  children
}) => <Container
  templateColumns={templateColumns}
  templateRows={templateRows}
  columnGap={columnGap}
  rowGap={rowGap}
>
  {children}
</Container>;

export default Button;