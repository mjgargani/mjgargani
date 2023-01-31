import styled, { keyframes } from "styled-components";
import { FrameProps } from "./types";
import tile from "../../../../assets/tile.png"

const gradientTransition = keyframes`
  0%{background-position:5% 0%}
  50%{background-position:96% 100%}
  100%{background-position:5% 0%}
`

export const Tiles = styled.div`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${tile});
  background-repeat: repeat;
  background-size: 8%;
  opacity: 0.015;
  animation: ${gradientTransition} 120s ease infinite;
`

export const Frame = styled.div`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  background:-moz-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
  background:-webkit-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
  background:-o-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
  background:-ms-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
  background:radial-gradient(ellipse at 50% 50%, rgba(255, 255, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
`

export const Container = styled.div<FrameProps>`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  margin: 0;
  background: linear-gradient(315deg, #0422ce, #6b04ce);
  background-size: 200% 200%;
  animation: ${gradientTransition} 15s ease infinite
`;