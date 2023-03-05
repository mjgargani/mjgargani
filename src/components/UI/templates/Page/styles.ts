import styled, { keyframes } from "styled-components";
import { PageProps } from "./types";

const opacityTransition = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div<PageProps>`
  position: fixed;
  z-index: 1000;
  display:  ${props => !!props.show ? 'block' : 'none'};
  animation: ${opacityTransition} .5s ease;
`;