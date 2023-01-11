import React, { PropsWithChildren } from "react";

import { Container } from "./styles";
import { GridCellProps } from "./types";

const Button: React.FC<PropsWithChildren<GridCellProps>> = ({
  area = ["auto"],
  children
}) => <Container area={area}>
  {children}
</Container>;

export default Button;