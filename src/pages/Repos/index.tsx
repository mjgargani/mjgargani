import React, { useEffect, useState } from "react";
import GridCell from "../../components/UI/atoms/GridCell";
import Card from "../../components/UI/molecules/Card";
import GridContainer from "../../components/UI/molecules/GridContainer";

import Page from "../../components/UI/templates/Page";
import { PageProps } from "../../components/UI/templates/Page/types";
import { GitHubRepoItem } from "./types";

const Repos: React.FC<PageProps> = ({ show }) => {
  const [repos, setRepos] = useState<Partial<GitHubRepoItem>[]>([]);

  useEffect(()=>{
    fetch("https://api.github.com/users/mjgargani/repos", {
      method: "GET"
    })
      .then(response => response.json())
      .then((data: Partial<GitHubRepoItem>[]) => {
        const newRepos: Partial<GitHubRepoItem>[] = data.map(el => ({ description: el.description }));
        setRepos(newRepos);
      });
  }, []);

  return (<Page show={show}>
    <GridContainer templateColumns={3}>
      { repos.length > 0 && repos.map(el => (
        <GridCell>
          <Card>{el.description}</Card>
        </GridCell>
      ))}
    </GridContainer>
  </Page>)
};

export default Repos;