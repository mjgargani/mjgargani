import React, { PropsWithChildren } from "react";

import { Tiles, Shadow, Container } from "./styles";
import { FrameProps } from "./types";

const Frame: React.FC<PropsWithChildren<FrameProps>> = ({
  style,
  page,
  onHome,
  children
}) =><Container style={style} page={page}>
      <Tiles />
      <Shadow onHome={onHome}/>
      {children}
    </Container>;

export default Frame;