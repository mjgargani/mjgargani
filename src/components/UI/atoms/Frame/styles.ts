import styled, { keyframes } from "styled-components";
import { FrameProps } from "./types";

const gradientTransition = keyframes`
  0%{background-position:0% 10%}
  50%{background-position:100% 91%}
  100%{background-position:0% 10%}
`

export const Container = styled.div<FrameProps>`
  width: 100vw;
  height: 100vh;
  margin: 0;
  background: linear-gradient(309deg, #2900ff, #ff0000);
  background-size: 400% 400%;
  animation: ${gradientTransition} 49s ease infinite
`;