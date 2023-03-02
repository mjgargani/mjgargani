import styled from "styled-components";
import { device } from "../../../utils/devices";

const fontSizeBase = 4;

export const Container = styled.div`
  position: fixed;
  min-width: 60vw;
  top: 75vh;
  left: 20vw;
  text-align: center;
  
  font-size: ${fontSizeBase}vw;
  @media ${device.mobileS} {
    font-size: ${fontSizeBase-0.5}vw;
  }
  @media ${device.mobileM} {
    font-size: ${fontSizeBase-1}vw;
  }
  @media ${device.mobileL} {
    font-size: ${fontSizeBase-1.5}vw;
  }
  @media ${device.laptop} {
    font-size: ${fontSizeBase-2}vw;
  }
  @media ${device.laptopL} {
    font-size: ${fontSizeBase-2.5}vw;
  }
  @media ${device.desktop} {
    font-size: ${fontSizeBase-3}vw;
  }
  @media (min-width: ${device.desktopL}) {
    font-size: ${fontSizeBase-3.5}vw;
  }
`;