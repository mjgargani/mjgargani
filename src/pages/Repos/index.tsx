import React, { useContext } from "react";
import GridCell from "../../components/UI/atoms/GridCell";
import Card from "../../components/UI/molecules/Card";
import GridContainer from "../../components/UI/atoms/GridContainer";

import Page from "../../components/UI/templates/Page";
import { PageProps } from "../../components/UI/templates/Page/types";
import { GitHubDataContext } from "../../context/GitHubData";
import mdParser from "../../utils/mdParser";

const Repos: React.FC<PageProps> = ({ show }) => {
  const { repos } = useContext(GitHubDataContext);

  return (<Page show={show}>
    <GridContainer 
      templateColumns={{
        desktop: ["repeat(3, 1fr)"],
      }}
    >
      { repos && repos.length > 0 && repos.map((el, i) => (
        <GridCell key={i}>
          <Card
            bgImg={`https://raw.githubusercontent.com/mjgargani/${el!.name}/main/thumbnail.gif`}
            url={el!.html_url}
            title={el!.name}
          >{mdParser(el!.description!, ["<p>", "</p>"])}</Card>
        </GridCell>
      ))}
    </GridContainer>
  </Page>)
};

export default Repos;