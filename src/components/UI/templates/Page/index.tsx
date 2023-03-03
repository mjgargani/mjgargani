import React, { PropsWithChildren } from "react";

import { Container } from "./styles";
import { PageProps } from "./types";

const Page: React.FC<PropsWithChildren<PageProps>> = ({
  show = false,
  children
}) => <Container show={show}>
  {show && children}
</Container>;

export default Page;