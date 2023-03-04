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
  {children}
</Container>;

export default Button;