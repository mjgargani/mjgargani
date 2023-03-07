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
    <h2 style={{ margin: "1%" }}><IconReplacer text={(children as string).replaceAll(replaceRegExpIcons, "")} darker={true}/></h2>
  </Container>
</>;

export default CardTitle;