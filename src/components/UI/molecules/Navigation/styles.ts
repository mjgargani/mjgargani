import styled from "styled-components";
import { device } from "../../../utils/devices";

const fontSizeBase = 4;
const topBase = 69;

export const Container = styled.div`
  position: fixed;
  min-width: 60vw;
  left: 20vw;
  text-align: center;
  
  top: ${topBase-3}vh;
  font-size: ${fontSizeBase}vw;
  @media ${device.mobileS} {
    top: ${topBase-2.5}vh;
    font-size: ${fontSizeBase-0.5}vw;
  }
  @media ${device.mobileM} {
    top: ${topBase-2}vh;
    font-size: ${fontSizeBase-1}vw;
  }
  @media ${device.mobileL} {
    top: ${topBase-1.5}vh;
    font-size: ${fontSizeBase-1.5}vw;
  }
  @media ${device.laptop} {
    top: ${topBase}vh;
    font-size: ${fontSizeBase-2}vw;
  }
  @media ${device.laptopL} {
    top: ${topBase}vh;
    font-size: ${fontSizeBase-2.5}vw;
  }
  @media ${device.desktop} {
    top: ${topBase}vh;
    font-size: ${fontSizeBase-3}vw;
  }
  @media (min-width: ${device.desktopL}) {
    top: ${topBase}vh;
    font-size: ${fontSizeBase-3.5}vw;
  }
`;