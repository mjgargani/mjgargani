import React, { PropsWithChildren } from 'react';
import Container from './styles';
import { FlexContainerProps } from './types';

const FlexContainer: React.FC<PropsWithChildren<FlexContainerProps>> = ({ 
  direction = "row",
  children
}) => <Container direction={direction}>
  { children }
</Container>

export default FlexContainer;