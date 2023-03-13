import React, { PropsWithChildren } from "react";
import { testIdName } from "../../../utils/testIdName";

import { Container } from "./styles";
import { ButtonProps } from "./types";

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  dataTestId = testIdName("button"),
  active = false,
  onClick,
  children
}) => <Container
  data-testid={dataTestId}
  onClick={onClick}
  active={active}
>
  <h1>{children}</h1>
</Container>;

export default Button;