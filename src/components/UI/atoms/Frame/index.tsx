import React, { PropsWithChildren } from "react";

import { Tiles, Shadow, Container } from "./styles";
import { FrameProps } from "./types";

const Frame: React.FC<PropsWithChildren<FrameProps>> = ({
  style,
  page,
  prevPage = 0,
  children
}) =><Container style={style} page={page}>
      <Tiles />
      <Shadow page={page} prevPage={prevPage}/>
      {children}
    </Container>;

export default Frame;