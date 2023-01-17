import React, { PropsWithChildren } from "react";

import { Container } from "./styles";
import { CardProps } from "./types";

const Card: React.FC<PropsWithChildren<CardProps>> = ({
  backgroundColor = "white",
  hoverColor = "whitesmoke",
  imgSource = false,
  children
}) => <Container 
  backgroundColor={backgroundColor} 
  hoverColor={hoverColor}
  imgSource={imgSource}
>
  {children}
</Container>;

export default Card;