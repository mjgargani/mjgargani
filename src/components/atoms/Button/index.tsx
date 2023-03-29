import randomId from '../../../utils/randomId';
import { Container } from './styles';
import { type ButtonProps } from './types';
import React, { type PropsWithChildren } from 'react';

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  dataTestId = randomId('button'),
  active = false,
  onClick,
  icon,
  styledCss,
  children,
}) => (
  <Container data-testid={dataTestId} onClick={onClick} active={active} styledCss={styledCss}>
    <h2>
      <span>{icon}</span>
      {children}
    </h2>
  </Container>
);

export default Button;
