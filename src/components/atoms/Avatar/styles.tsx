import { type AvatarProps } from './types';
import styled from 'styled-components';

export const Container = styled.div<AvatarProps>`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center left;
  border-radius: ${(props) => props.theme.common.border.radius};

  height: 100%;
  width: 100%;

  ${(props) => props.styledCss}
`;
