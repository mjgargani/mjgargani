import defaults from '../../../styles/defaults/potion';
import animation from '../../../styles/utils/animation';
import { type PotionProps } from './types';
import styled, { keyframes } from 'styled-components';

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
`;

const moveAnim = keyframes`
  0% {
    left:25vw; top:10vh;
  }
  8% {
    left:35vw; top:15vh;
  }
  16% {
    left:40vw; top:20vh;
  }
  24% {
    left:30vw; top:25vh;
  }
  32% {
    left:20vw; top:30vh;
  }
  40% {
    left:10vw; top:35vh;
  }
  48% {
    left:20vw; top:40vh;
  }
  56% {
    left:30vw; top:35vh;
  }
  64% {
    left:40vw; top:30vh;
  }
  72% {
    left:30vw; top:25vh;
  }
  80% {
    left:20vw; top:20vh;
  }
  88% {
    left:15vw; top:15vh;
  }
  96% {
    left:20vw; top:11vh;
  }
  100% {
    left:25vw; top:10vh;
  }
`;
const shadowAnim = keyframes`
  to{
    -webkit-filter: drop-shadow(0 0 50px rgba(255, 255, 255, .25));
    filter: drop-shadow(0 0 50px rgba(255, 255, 255, .25));
  }
  from{
    -webkit-filter: drop-shadow(0 0 50px rgba(255, 255, 255, .75));
    filter: drop-shadow(0 0 50px rgba(255, 255, 255, .75));
  }
`;

export const Container = styled.div<PotionProps>`
  position: fixed;
  top: calc(50% - 25vh);
  left: calc(50% - 25vw);
  width: 50vw;
  height: 50vh;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${(props) => (props.transparent ? defaults['/projects'].opacity : defaults['/'].opacity)};
  animation: ${(props) =>
        animation.opacity(
          props.transparent ? defaults['/'].opacity : defaults['/projects'].opacity,
          props.transparent ? defaults['/projects'].opacity : defaults['/'].opacity,
        )}
      0.75s ease,
    ${shadowAnim} 5s infinite alternate ease-in-out, ${rotateAnim} 60s infinite alternate ease-in-out,
    ${moveAnim} 120s infinite ease-in-out;
  z-index: 0;

  ${(props) => props.styledCss}
`;
