import React, { PropsWithChildren } from "react";

import { Container } from "./styles";
import { PotionProps } from "./types";

const Potion: React.FC<PropsWithChildren<PotionProps>> = ({
  speed = 10,
}) => <Container speed={speed} />;

export default Potion;