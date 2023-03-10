import React, { PropsWithChildren } from "react";

import { Container } from "./styles";
import { GridCellProps } from "./types";

const GridCell: React.FC<PropsWithChildren<GridCellProps>> = ({
  dataTestId = `avatar_${Date.now()}`,
  bgImg = {
    source: "",
    size: "contain"
  },
  area = ["auto"],
  style,
  children
}) => <Container 
  data-testid={dataTestId} 
  area={area} 
  bgImg={bgImg} 
  style={style}
>
  {children}
</Container>;

export default GridCell;