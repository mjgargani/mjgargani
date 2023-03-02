import React from "react";

import Page from "../../components/UI/templates/Page";
import { PageProps } from "../../components/UI/templates/Page/types";
import { Container } from "./styles";

const Home: React.FC<PageProps> = ({ show }) => <Page show={show}>
  <Container>mjgargani's Lab </Container>
</Page>;

export default Home;