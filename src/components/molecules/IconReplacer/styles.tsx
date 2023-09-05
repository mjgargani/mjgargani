import { type IconReplacerProps } from './types';
import styled from 'styled-components';

export const Container = styled.span<Partial<IconReplacerProps>>`
  display: inline;
  ${(props) => props.darker && 'filter: brightness(0.8)'};
  ${(props) => props.brighter && 'filter: brightness(1.2)'};
  ${(props) => props.color && `color: ${props.color}`};
  vertical-align: middle;

  ${(props) => props.styledCss}
`;
