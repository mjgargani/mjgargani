import React, { useContext, useEffect, useState } from "react";
import GridCell from "../../components/UI/atoms/GridCell";
import Card from "../../components/UI/molecules/Card";
import GridContainer from "../../components/UI/molecules/GridContainer";
import Vakinha from "../../assets/vakinha.jpeg"
import AboutDescription from "../../assets/about.md";

import Page from "../../components/UI/templates/Page";
import { PageProps } from "../../components/UI/templates/Page/types";
import { GitHubDataContext } from "../../context/GitHubData";
import mdParser from "../../utils/mdParser";
import Avatar from "../../components/UI/atoms/Avatar";
import request from "../../utils/fetch";

let loadTrigger = false;

const About: React.FC<PageProps> = ({ show }) => {
  const { profile } = useContext(GitHubDataContext);
  const [desc, setDesc] = useState<string | undefined>(undefined);

  useEffect(()=>{
    if(!loadTrigger && !!!desc){
      loadTrigger = true;
      
      request(AboutDescription, "GET", true)
        .then((data) => {
          setDesc(data);
        })
    }
  }, [desc, setDesc]);

  return (<Page show={show}>
    <GridContainer 
      templateColumns={{desktop: ["1fr", "400px"]}}
      templateRows={{ mobile: ["1fr", "300px"] }}
      columnGap={20}
      rowGap={10}
      style={{
        position: "fixed",
        width: "80vw",
        marginLeft: "10vw",
        height: "55vh",
        top: "15vh",
        overflow: "auto"
      }}
    >
        <GridCell>
          <Card title={`Olá! Sou ${profile?.name}`} content={true}>
            <GridContainer
              templateColumns={{
                desktop: ["96px 1fr"],
                mobile: ["64px 1fr"],
              }}
              style={{
                margin: "1%",
              }}
            >
              <GridCell>
                <Avatar src={profile?.avatar_url!} />
              </GridCell>
              <GridCell style={{
                textAlign: "justify",
                lineHeight: "150%",
                textIndent: "5%",
                paddingLeft: "5%"
              }}
              >{mdParser(profile?.bio || "", ["<p>", "</p>"])}</GridCell>
            </GridContainer>
            <GridContainer style={{ marginTop: "2%" }}>
              <GridCell>{desc && mdParser(desc)}</GridCell>
            </GridContainer>
          </Card>
        </GridCell>
        <a href="https://www.vakinha.com.br/3539654" target="_blank" rel="noreferrer">
          <GridCell bgImg={{ source: Vakinha, size: "contain" }} style={{minHeight:"100%", margin: "0 4.5%"}} />
        </a>
    </GridContainer>
  </Page>)
};

export default About;