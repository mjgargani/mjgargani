import styled, { keyframes } from "styled-components";
import { device } from "../../../utils/devices";
import { PageProps } from "./types";

const opacityTransition = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const heightBase = 60;
const marginBase = [4,8,0,8];

export const Container = styled.div<PageProps>`
  z-index: 1000;
  overflow: auto;
  width: inherit;
  /* width: 84vw; */
  display:  ${props => !!props.show ? 'block' : 'none'};
  animation: ${opacityTransition} .5s ease;
  
  /* height: ${heightBase}vh;
  margin: ${marginBase[0]}vh ${marginBase[1]}vw ${marginBase[2]}vh ${marginBase[3]}vw;
  @media ${device.mobileS} {
    height: ${heightBase}vh;
    margin: ${marginBase[0]}vh ${marginBase[1]}vw ${marginBase[2]}vh ${marginBase[3]}vw;
  }
  @media ${device.mobileM} {
    height: ${heightBase}vh;
    margin: ${marginBase[0]}vh ${marginBase[1]}vw ${marginBase[2]}vh ${marginBase[3]}vw;
  }
  @media ${device.mobileL} {
    height: ${heightBase}vh;
    margin: ${marginBase[0]}vh ${marginBase[1]}vw ${marginBase[2]}vh ${marginBase[3]}vw;
  }
  @media ${device.tablet} {
    height: ${heightBase}vh;
    margin: ${marginBase[0]}vh ${marginBase[1]}vw ${marginBase[2]}vh ${marginBase[3]}vw;
  }
  @media ${device.laptop} {
    height: ${heightBase-14}vh;
    margin: ${marginBase[0]+14}vh ${marginBase[1]}vw ${marginBase[2]}vh ${marginBase[3]}vw;
  }
  @media ${device.laptopL} {
    height: ${heightBase-14}vh;
    margin: ${marginBase[0]+14}vh ${marginBase[1]}vw ${marginBase[2]}vh ${marginBase[3]}vw;
  }
  @media ${device.desktop} {
    height: ${heightBase-14}vh;
    margin: ${marginBase[0]+14}vh ${marginBase[1]}vw ${marginBase[2]}vh ${marginBase[3]}vw;
  }
  @media ${device.desktopL} {
    height: ${heightBase-14}vh;
    margin: ${marginBase[0]+14}vh ${marginBase[1]}vw ${marginBase[2]}vh ${marginBase[3]}vw;
  } */
`;