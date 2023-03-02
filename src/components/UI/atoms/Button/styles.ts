import styled, { keyframes } from "styled-components";
import { ButtonProps } from "./types";

const colorTransition = (from:string, to: string) =>  keyframes`
  from { 
    background-color: ${from};
  }
  to {
    background-color: ${to};
  }
`

export const Container = styled.button<ButtonProps>`
  margin-bottom: 1vh;
  min-width: 100%;
  min-height: 5vh;
  border-style: none;
  border-width: 0px;
  border-radius: 5px;
  color: white;
  background-color: rgba(255, 255, 255, .1);
  -webkit-filter: drop-shadow(0 5px 5px rgba(0, 0, 0, .1));
  filter: drop-shadow(0 5px 5px rgba(0, 0, 0, .1));
  animation: ${ colorTransition("rgba(255, 255, 255, .25)", "rgba(255, 255, 255, .1)") } .25s;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, .25);
    animation: ${ colorTransition("rgba(255, 255, 255, .1)", "rgba(255, 255, 255, .25)") } .25s;
  }
`;