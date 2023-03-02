import styled, { keyframes } from "styled-components";
import { device } from "../../../utils/devices";
import { CardProps } from "./types";

const colorTransition = (from: string, to: string) =>  keyframes`
  from { 
    background-color: ${from}; 
  }
  to { 
    background-color: ${to}; 
  }
`

export const Container = styled.div<CardProps>`
  margin: 10px;
  
  min-height: 50px;
  @media ${device.mobileS} {
    min-height: 60px;
  }
  @media ${device.mobileM} {
    min-height: 70px;
  }
  @media ${device.mobileL} {
    min-height: 80px;
  }
  @media ${device.laptop} {
    min-height: 90px;
  }
  @media ${device.laptopL} {
    min-height: 100px;
  }
  @media ${device.desktop} {
    min-height: 110px;
  }
  @media ${device.desktopL} {
    min-height: 120px;
  }

  border-style: none;
  border-width: 0px;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  animation: ${ props => colorTransition(props.hoverColor!, props.backgroundColor!)} 1s ease;
  background-color: ${(props) => props.backgroundColor!};

  &:hover {
    animation: ${ props => colorTransition(props.backgroundColor!, props.hoverColor!)} 1s ease;
    background-color: ${(props) => props.hoverColor!};
    cursor: pointer;
  }
`;