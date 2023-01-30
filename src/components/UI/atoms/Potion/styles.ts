import styled, { keyframes } from "styled-components";
import { PotionProps } from "./types";
import potion from "../../../../assets/potion.png"

const rotateAnim = keyframes`
  0% { 
    transform: rotate(0deg); 
  }
  30% { 
    transform: rotate(120deg);
  }
  60% { 
    transform: rotate(240deg);
  }
  100% { 
    transform: rotate(359deg);
  }
`

const moveAnim = keyframes`
  0% {
    left:10vw; top:10vh;
  }
  8% {
    left:20vw; top:15vh;
  }
  16% {
    left:30vw; top:20vh;
  }
  24% {
    left:40vw; top:25vh;
  }
  32% {
    left:30vw; top:30vh;
  }
  40% {
    left:20vw; top:35vh;
  }
  48% {
    left:10vw; top:40vh;
  }
  56% {
    left:20vw; top:35vh;
  }
  64% {
    left:30vw; top:30vh;
  }
  72% {
    left:40vw; top:25vh;
  }
  80% {
    left:30vw; top:20vh;
  }
  88% {
    left:20vw; top:15vh;
  }
  96% {
    left:11vw; top:11vh;
  }
  100% {
    left:10vw; top:10vh;
  }
`

export const Container = styled.div<PotionProps>`
  position: fixed;
  top: calc(50% - 25vh);
  left: calc(50% - 25vw);
  width: 50vw;
  height: 50vh;
  background-image: url(${potion});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${rotateAnim} 60s infinite alternate ease-in-out, ${moveAnim} 120s infinite ease-in-out;
  -webkit-filter: drop-shadow(0 0 100px rgba(0, 0, 0));
  filter: drop-shadow(0 0 100px rgba(0, 0, 0));
`;