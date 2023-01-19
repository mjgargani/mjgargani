import React, { PropsWithChildren } from "react";

import { Container } from "./styles";
import { FrameProps } from "./types";

const Frame: React.FC<PropsWithChildren<FrameProps>> = ({
  style,
  children
}) => <Container style={style}>
  {children}
</Container>;

export default Frame;