import React, { PropsWithChildren, useContext } from "react";
import { GitHubDataContext } from "../../../../context/GitHubData";
import Loading from "../../atoms/Loading";

import { Container } from "./styles";
import { PageProps } from "./types";

const Page: React.FC<PropsWithChildren<PageProps>> = ({
  show = false,
  children
}) => {
  const { loading } = useContext(GitHubDataContext);

  return <Container show={show}>
    {loading && <Loading />}
    {!loading && show && children}
  </Container>
};

export default Page;