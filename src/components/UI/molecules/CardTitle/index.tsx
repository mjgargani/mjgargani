import React, { PropsWithChildren } from "react";
import { CommonProps } from "../../../../types";
import { testIdName } from "../../../utils/testIdName";
import IconReplacer from "../IconReplacer";

import { Container } from "./styles";

const replaceRegExpTitle = new RegExp(".+(?<=_)", "gi");
const replaceRegExpIcons = new RegExp("(?=_).+", "gi");

const CardTitle: React.FC<PropsWithChildren<CommonProps>> = ({
  dataTestId = testIdName("card-title"),
  children
}) => <>
  <Container data-testid={dataTestId}>
    {(children as string).replaceAll(replaceRegExpTitle, "").replaceAll("-"," ")}<br />
    <IconReplacer style={{ fontSize: "larger" }} text={(children as string).replaceAll(replaceRegExpIcons, "")} darker={true}/>
  </Container>
</>;

export default CardTitle;