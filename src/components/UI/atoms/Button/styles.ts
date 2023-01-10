import styled, { keyframes } from "styled-components";
import { ButtonProps } from "./types";

const colorTransition = (from: string, to: string) =>  keyframes`
  from { 
    background-color: ${from}; 
  }
  to { 
    background-color: ${to}; 
  }
`

export const Container = styled.button<ButtonProps>`
  min-width: 200px;
  min-height: 50px;
  border-style: none;
  border-width: 0px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  animation: ${ props => colorTransition(props.hoverColor!, props.backgroundColor!)} 1s;
  background-color: ${(props) => props.backgroundColor!};

  &:hover {
    animation: ${ props => colorTransition(props.backgroundColor!, props.hoverColor!)} 1s;
    background-color: ${(props) => props.hoverColor!};
    cursor: pointer;
  }
`;