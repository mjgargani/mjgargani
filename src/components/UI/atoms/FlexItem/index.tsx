import React, { PropsWithChildren } from 'react';
import Container from './styles';
import { FlexItemProps } from './types';

const FlexItem: React.FC<PropsWithChildren<FlexItemProps>> = ({ 
  flex = ["auto"],
  children
}) => <Container flex={flex}>
  { children }
</Container>

export default FlexItem;