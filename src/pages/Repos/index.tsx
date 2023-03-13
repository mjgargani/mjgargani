import React, { useContext } from "react";
import GridCell from "../../components/UI/atoms/GridCell";
import Card from "../../components/UI/molecules/Card";
import GridContainer from "../../components/UI/atoms/GridContainer";

import Page from "../../components/UI/templates/Page";
import { PageProps } from "../../components/UI/templates/Page/types";
import { GitHubDataContext } from "../../context/GitHubData";
import mdParser from "../../utils/mdParser";
import { testIdName } from "../../components/utils/testIdName";

const Repos: React.FC<PageProps> = ({ 
  dataTestId = testIdName("page-repos"),
  show 
}) => {
  const { repos } = useContext(GitHubDataContext);

  return (<Page show={show}>
    <GridContainer 
      dataTestId={dataTestId}
      templateColumns={{
        desktop: ["repeat(3, 1fr)"],
      }}
      columnGap={30}
      rowGap={30}
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