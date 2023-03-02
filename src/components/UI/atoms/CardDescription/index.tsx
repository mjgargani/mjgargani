import React, { PropsWithChildren } from "react";
import { Container } from "./styles";

const CardDescription: React.FC<PropsWithChildren> = ({
  children
}) => <Container>{children}</Container>;

export default CardDescription;