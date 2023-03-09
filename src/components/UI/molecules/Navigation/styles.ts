import styled from "styled-components";
import { device } from "../../../utils/devices";

const fontSizeBase = 4;

export const Container = styled.div`
  position: relative;
  text-align: center;
  height: 100%;
  width: 100vw;
  
  top: calc(50% - 15vh);
  font-size: ${fontSizeBase}vw;
  @media ${device.mobileS} {
    top: calc(50% - 15vh);
    font-size: ${fontSizeBase-0.5}vw;
  }
  @media ${device.mobileM} {
    top: calc(50% - 15vh);
    font-size: ${fontSizeBase-1}vw;
  }
  @media ${device.mobileL} {
    top: calc(50% - 15vh);
    font-size: ${fontSizeBase-1.5}vw;
  }
  @media ${device.tablet} {
    top: calc(50% - 3vh);
    font-size: ${fontSizeBase-1.7}vw;
  }
  @media ${device.laptop} {
    top: calc(50% - 3vh);
    font-size: ${fontSizeBase-2}vw;
  }
  @media ${device.laptopL} {
    top: calc(50% - 3vh);
    font-size: ${fontSizeBase-2.5}vw;
  }
  @media ${device.desktop} {
    top: calc(50% - 3vh);
    font-size: ${fontSizeBase-3}vw;
  }
  @media ${device.desktopL} {
    top: calc(50% - 3vh);
    font-size: ${fontSizeBase-3.5}vw;
  }
`;