import React, { PropsWithChildren } from "react";
import Potion from "../Potion";

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
      <Potion transparent={page !== 0}/>
      {children}
    </Container>;

export default Frame;