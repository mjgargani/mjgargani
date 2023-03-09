import React, { PropsWithChildren } from 'react';
import Container from './styles';
import { FlexItemProps } from './types';

const FlexItem: React.FC<PropsWithChildren<FlexItemProps>> = ({ 
  flex = ["1"],
  style,
  children
}) => <Container style={style} flex={flex}>
  { children }
</Container>

export default FlexItem;