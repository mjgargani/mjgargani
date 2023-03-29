import { GitHubDataContext } from '../../../context/GitHubData';
import { type CommonProps } from '../../../globals';
import randomId from '../../../utils/randomId';
import Loading from '../../atoms/Loading';
import { Container } from './styles';
import React, { type PropsWithChildren, useContext } from 'react';

const Page: React.FC<PropsWithChildren<CommonProps>> = ({ dataTestId = randomId('page'), styledCss, children }) => {
  const { loading } = useContext(GitHubDataContext);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container data-testid={dataTestId} styledCss={styledCss}>
          {children}
        </Container>
      )}
    </>
  );
};

export default Page;
