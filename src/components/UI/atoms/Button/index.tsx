import React, { PropsWithChildren } from "react";

import { Container } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  backgroundColor = "darkblue",
  hoverColor = "blue",
  onClick,
  children
}) => <Container 
  backgroundColor={backgroundColor} 
  hoverColor={hoverColor} 
  onClick={onClick}
>
  {children}
</Container>;

export default Button;