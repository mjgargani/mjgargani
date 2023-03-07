import React, { PropsWithChildren } from "react";
import FooterInfo from "../../atoms/FooterInfo";
import Potion from "../../atoms/Potion";

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
      <FooterInfo />
      {children}
    </Container>;

export default Frame;