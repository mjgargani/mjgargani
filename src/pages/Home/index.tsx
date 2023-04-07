import Page from '../../components/templates/Page';
import { type CommonProps } from '../../globals';
import randomId from '../../utils/randomId';
import { Container } from './styles';
import React from 'react';

const Home: React.FC<CommonProps> = ({ dataTestId = randomId('page-home') }) => (
  <Page>
    <Container data-testid={dataTestId}>
      <h1>
        mjgargani&apos;s Lab <span></span>
      </h1>
    </Container>
  </Page>
);

export default Home;
