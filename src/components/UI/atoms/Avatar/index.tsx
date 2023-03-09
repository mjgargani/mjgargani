import React, { PropsWithChildren } from "react";

import { Container } from "./styles";
import { AvatarProps } from "./types";

const Avatar: React.FC<PropsWithChildren<AvatarProps>> = ({
  dataTestId = `avatar_${Date.now()}`,
  src
}) => <Container data-testid={dataTestId} src={src} />;

export default Avatar;