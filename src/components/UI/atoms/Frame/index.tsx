import React, { PropsWithChildren } from "react";

import { Frame as Shadow, Tiles, Container } from "./styles";
import { FrameProps } from "./types";

const Frame: React.FC<PropsWithChildren<FrameProps>> = ({
  style,
  children
}) => <Container style={style}>
      <Shadow>
        {children}
        <Tiles />
      </Shadow>
</Container>;

export default Frame;