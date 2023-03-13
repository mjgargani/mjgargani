import React, { PropsWithChildren } from "react";

import { Container } from "./styles";
import { PotionProps } from "./types";

const Potion: React.FC<PropsWithChildren<PotionProps>> = ({
  dataTestId = `potion_${Date.now()}`,
  transparent = false
}) => <Container data-testid={dataTestId} transparent={transparent}/>;

export default Potion;