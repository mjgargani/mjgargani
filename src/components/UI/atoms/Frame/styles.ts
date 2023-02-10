import styled, { keyframes } from "styled-components";
import { FrameProps } from "./types";
import tile from "../../../../assets/tile.png"

const shadowAlpha = [0.5, 0.9]

const gradientTransition = keyframes`
  0%{background-position:5% 0%}
  50%{background-position:96% 100%}
  100%{background-position:5% 0%}
`

const frameShadowTransition = (onHome: boolean) => keyframes`
  from{
    opacity: ${onHome ? shadowAlpha[1] : shadowAlpha[0]};
  }
  to{
    opacity: ${onHome ? shadowAlpha[0] : shadowAlpha[1]};
  }
`
export const Shadow = styled.div<Partial<FrameProps>>`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  background:-moz-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  background:-webkit-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  background:-o-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  background:-ms-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  background:radial-gradient(ellipse at 50% 50%, rgba(255, 255, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  opacity: ${props => !!props.onHome ? shadowAlpha[0] : shadowAlpha[1]};
  animation: ${props => frameShadowTransition(!!props.onHome)} 1s ease;
  pointer-events: none;
  z-index: -1600;
`

export const Tiles = styled.div`
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${tile});
  background-repeat: repeat;
  background-size: 8%;
  opacity: 0.015;
  animation: ${gradientTransition} 120s alternate-reverse ease infinite;
  pointer-events: none;
  z-index: -1200;
`

const linearGradientColors = [
  ["#0422ce", "#873ea1"],
  ["#636311", "#417883"],
  ["#690808", "#64c773"],
]

export const Container = styled.div<Partial<FrameProps>>`
  font-family : "mjgarganis Lab";
  position: fixed;
  margin: 0;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #000;
  background: linear-gradient(315deg, ${props => linearGradientColors[Number(props.page)].join(', ')});
  background-size: 200% 200%;
  animation: ${gradientTransition} 15s ease infinite;
  z-index: -400;
`;