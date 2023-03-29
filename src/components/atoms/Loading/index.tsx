import randomId from '../../../utils/randomId';
import { Container, Potion } from './styles';
import { type LoadingProps } from './types';
import React from 'react';

const Loading: React.FC<LoadingProps> = ({ dataTestId = randomId('loading'), isCard = false, styledCss }) => (
  <Container data-testid={dataTestId} isCard={isCard} styledCss={styledCss}>
    <Potion></Potion>
  </Container>
);

export default Loading;
