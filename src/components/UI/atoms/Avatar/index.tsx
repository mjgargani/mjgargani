import React, { PropsWithChildren } from "react";

import { Container } from "./styles";
import { AvatarProps } from "./types";

const Avatar: React.FC<PropsWithChildren<AvatarProps>> = ({
  src
}) => <Container src={src} />;

export default Avatar;