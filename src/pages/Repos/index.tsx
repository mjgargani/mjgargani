import React, { useEffect, useState } from "react";
import GridCell from "../../components/UI/atoms/GridCell";
import Card from "../../components/UI/molecules/Card";
import GridContainer from "../../components/UI/molecules/GridContainer";

import Page from "../../components/UI/templates/Page";
import { PageProps } from "../../components/UI/templates/Page/types";
import { GitHubRepoItem } from "./types";

let loadedContent: boolean = false;

const Repos: React.FC<PageProps> = ({ show }) => {
  const [repos, setRepos] = useState<Partial<GitHubRepoItem>[]>([]);

  useEffect(()=>{
    if(!!!loadedContent && !!!repos.length){
      loadedContent = true;
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
    }
  }, [repos, setRepos]);

  return (<Page show={show}>
    <GridContainer 
      templateColumns={{
        desktop: ["repeat(3, 1fr)"],
      }}
      style={{
        position: "fixed",
        overflow: "auto",
        width: "80vw",
        marginLeft: "10vw",
        height: "55vh",
        top: "15vh"
      }}
    >
      { repos.length > 0 && repos.map((el, i) => (
        <GridCell key={i}>
          <Card
            bgImg={`https://raw.githubusercontent.com/mjgargani/${el.name}/main/thumbnail.gif`}
            url={el.html_url}
            title={el.name}
          >{el.description}</Card>
        </GridCell>
      ))}
    </GridContainer>
  </Page>)
};

export default Repos;