import React, { PropsWithChildren } from "react";
import { CommonProps } from "../../../../types";
import { testIdName } from "../../../utils/testIdName";
import { Container } from "./styles";

const CardDescription: React.FC<PropsWithChildren<CommonProps>> = ({
  dataTestId =  testIdName("card-desc"),
  children
}) => <Container data-testid={dataTestId} >{children}</Container>;

export default CardDescription;