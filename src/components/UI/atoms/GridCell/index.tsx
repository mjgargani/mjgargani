import React, { PropsWithChildren } from "react";

import { Container } from "./styles";
import { GridCellProps } from "./types";

const GridCell: React.FC<PropsWithChildren<GridCellProps>> = ({
  bgImg = {
    source: "",
    size: "contain"
  },
  area = ["auto"],
  style,
  children
}) => <Container area={area} bgImg={bgImg} style={style}>
  {children}
</Container>;

export default GridCell;