import { type IconReplacerProps } from './types';
import styled from 'styled-components';

export const Container = styled.span<Partial<IconReplacerProps>>`
  display: inline;
  ${(props) => props.darker && 'filter: brightness(0.8)'};
  vertical-align: middle;

  ${(props) => props.styledCss}
`;
