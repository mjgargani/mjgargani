import React from "react";
import FooterInfo from "../FooterInfo";
import Potion from "../../atoms/Potion";

import { Tiles, Shadow, Container } from "./styles";
import { FrameProps } from "./types";

const Frame: React.FC<FrameProps> = ({
  style,
  page,
  prevPage = 0,
}) =><Container style={style} page={page}>
      <Tiles />
      <Shadow page={page} prevPage={prevPage}/>
      <Potion transparent={page !== 0}/>
      <FooterInfo />
    </Container>;

export default Frame;