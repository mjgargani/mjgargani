import React, { PropsWithChildren } from "react";
import { CommonProps } from "../../../../types";
import { Container } from "./styles";

const CardDescription: React.FC<PropsWithChildren<CommonProps>> = ({
  dataTestId = `card-desc_${Date.now()}`,
  children
}) => <Container data-testid={dataTestId} >{children}</Container>;

export default CardDescription;