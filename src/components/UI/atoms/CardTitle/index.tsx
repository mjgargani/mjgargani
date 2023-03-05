import React, { PropsWithChildren } from "react";
import IconReplacer from "../IconReplacer";

import { Container } from "./styles";

const replaceRegExp = new RegExp(".+(?<=_)", "gi");

const CardTitle: React.FC<PropsWithChildren> = ({
  children
}) => <>
  <Container>
    {(children as string).replaceAll(replaceRegExp, "").replaceAll("-"," ")}<br />
    <IconReplacer text={children as string} />
  </Container>
</>;

export default CardTitle;