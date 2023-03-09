import styled from "styled-components";
import { device } from "../../../utils/devices";

const fontSizeBase = 2.5;

export const Container = styled.div`
  position: fixed;
  display: inline-block;
  min-width: 100vw;
  bottom: 1vh;
  font-family: sans-serif;
  font-weight: normal;
  text-align: center;
  text-shadow: 0 2px 0 black;
  opacity: .8;
  color: white;

  font-size: ${fontSizeBase}vw;
  @media ${device.mobileS} {
    font-size: ${fontSizeBase-0.2}vw;
  }
  @media ${device.mobileM} {
    font-size: ${fontSizeBase-0.3}vw;
  }
  @media ${device.mobileL} {
    font-size: ${fontSizeBase-0.5}vw;
  }
  @media ${device.tablet} {
    font-size: ${fontSizeBase-1}vh;
  }
  @media ${device.laptop} {
    font-size: ${fontSizeBase-1}vh;
  }
  @media ${device.laptopL} {
    font-size: ${fontSizeBase-.7}vh;
  }
`;