import React from 'react';
import { CommonProps } from '../../../../types';
import { testIdName } from '../../../utils/testIdName';

import { Container, Potion } from './styles';

const Loading: React.FC<CommonProps> = ({
  dataTestId = testIdName("loading")
}) => {
  return <Container data-testid={dataTestId}>
    <Potion></Potion>
  </Container>;
}

export default Loading;