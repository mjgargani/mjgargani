import React from "react";
import IconReplacer from "../IconReplacer";

import { Container } from "./styles";

const FooterInfo: React.FC = () => <Container>
  🄯 <span style={{fontFamily: "mjgarganis Lab", color: "#E9E9FC"}}></span> {new Date().getFullYear()}; Este portfólio foi feito com <IconReplacer style={{ lineHeight: "80%" }} text="nodejs-typescript-reactjs-styledcomponents"/> e <IconReplacer style={{ lineHeight: "80%" }} text="heart"/>
</Container>;

export default FooterInfo;