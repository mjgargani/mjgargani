import React, { useEffect, useState } from "react";
import GridCell from "../../components/UI/atoms/GridCell";
import Card from "../../components/UI/molecules/Card";
import GridContainer from "../../components/UI/molecules/GridContainer";

import Page from "../../components/UI/templates/Page";
import { PageProps } from "../../components/UI/templates/Page/types";
import { GitHubRepoItem } from "./types";
import CardTitle from "../../components/UI/atoms/CardTitle";

const Repos: React.FC<PageProps> = ({ show }) => {
  const [repos, setRepos] = useState<Partial<GitHubRepoItem>[]>([]);

  useEffect(()=>{
    fetch("https://api.github.com/users/mjgargani/repos", {
      method: "GET"
    })
      .then(response => response.json())
      .then((data: Partial<GitHubRepoItem>[]) => {
        const newRepos: Partial<GitHubRepoItem>[] = data.map(el => (
          { 
            name: el.name,
            description: el.description,
            html_url: el.html_url
          }
        ));
        setRepos(newRepos);
      });
  }, []);

  return (<Page show={show}>
    <GridContainer 
      templateColumns={2}
      style={{
        position: "fixed",
        overflow: "auto",
        width: "80vw",
        marginLeft: "10vw",
        height: "60vh",
        top: "10vh"
      }}
    >
      { repos.length > 0 && repos.map(el => (
        <GridCell>
          <Card url={el.html_url}>
            <CardTitle>{el.name}</CardTitle>
            <p style={{
              fontFamily: "sans-serif",
              fontWeight: "normal",
              fontSize: "1.5vw",
            }}>{el.description}</p>
          </Card>
        </GridCell>
      ))}
    </GridContainer>
  </Page>)
};

export default Repos;