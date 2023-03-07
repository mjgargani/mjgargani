import React, { PropsWithChildren } from "react";
import IconReplacer from "../IconReplacer";

import { Container } from "./styles";

const replaceRegExpTitle = new RegExp(".+(?<=_)", "gi");
const replaceRegExpIcons = new RegExp("(?=_).+", "gi");

const CardTitle: React.FC<PropsWithChildren> = ({
  children
}) => <>
  <Container>
    {(children as string).replaceAll(replaceRegExpTitle, "").replaceAll("-"," ")}<br />
    <IconReplacer text={(children as string).replaceAll(replaceRegExpIcons, "")} />
  </Container>
</>;

export default CardTitle;