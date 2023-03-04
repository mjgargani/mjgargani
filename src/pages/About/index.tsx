import React from "react";
import GridCell from "../../components/UI/atoms/GridCell";
import Card from "../../components/UI/molecules/Card";
import GridContainer from "../../components/UI/molecules/GridContainer";
import Vakinha from "../../assets/vakinha.jpeg"

import Page from "../../components/UI/templates/Page";
import { PageProps } from "../../components/UI/templates/Page/types";

const About: React.FC<PageProps> = ({ show }) => {
  return (<Page show={show}>
    <GridContainer 
      templateColumns={{desktop: ["1fr", "400px"]}}
      templateRows={{ mobile: ["1fr", "300px"] }}
      columnGap={20}
      rowGap={20}
      style={{
        position: "fixed",
        width: "80vw",
        marginLeft: "10vw",
        height: "60vh",
        top: "10vh",
        overflow: "auto"
      }}
    >
        <GridCell>
          <Card title="Sobre" content={true}>
            Olá! Meu nome é Rodrigo Gargani. Sou desenvolvedor web há cinco anos e atualmente estou me aventurando como autônomo! Meu e-mail para contato é o <a href="mailto:mjgargani@gmail.com">mjgargani@gmail.com</a> !
          </Card>
        </GridCell>
        <a href="https://www.vakinha.com.br/3539654" target="_blank" rel="noreferrer">
          <GridCell bgImg={{ source: Vakinha, size: "contain" }} style={{minHeight:"100%"}} />
        </a>
    </GridContainer>
  </Page>)
};

export default About;