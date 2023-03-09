import React, { PropsWithChildren } from "react";

import { Container } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  backgroundColor = "darkblue",
  hoverColor = "blue",
  active = false,
  onClick,
  children
}) => <Container 
  backgroundColor={backgroundColor} 
  hoverColor={hoverColor} 
  onClick={onClick}
  active={active}
>
  <h1>{children}</h1>
</Container>;

export default Button;