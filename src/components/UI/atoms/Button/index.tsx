import React, { PropsWithChildren } from "react";

import { Container } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  backgroundColor = "darkblue",
  hoverColor = "blue",
  children
}) => <Container backgroundColor={backgroundColor} hoverColor={hoverColor}>
  {children}
</Container>;

export default Button;