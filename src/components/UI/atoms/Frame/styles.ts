import styled, { keyframes } from "styled-components";
import { FrameProps } from "./types";

const gradientTransition = keyframes`
  0%{background-position:5% 0%}
  50%{background-position:96% 100%}
  100%{background-position:5% 0%}
`

export const Container = styled.div<FrameProps>`
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  background: linear-gradient(315deg, #0422ce, #6b04ce);
  background-size: 400% 400%;
  animation: ${gradientTransition} 15s ease infinite
`;