import React from "react";

import Page from "../../components/UI/templates/Page";
import { PageProps } from "../../components/UI/templates/Page/types";
import { testIdName } from "../../components/utils/testIdName";
import { Container } from "./styles";

const Home: React.FC<PageProps> = ({
  dataTestId = testIdName("page-home"),
  show 
}) => <Page show={show}>
  <Container data-testid={dataTestId}>mjgargani's Lab <span style={{ color: "darkblue" }}></span></Container>
</Page>;

export default Home;