import styled from "styled-components";
import { device } from "../../../utils/devices";

const fontSizeBase = 3.2;

export const Container = styled.p`
  text-transform: uppercase;
  text-align: center;
  line-height: 200%;
  margin-top: 3.5%;
  margin-bottom: 0;

  font-size: ${fontSizeBase}vw;
  @media ${device.mobileS} {
    font-size: ${fontSizeBase-0.5}vw;
  }
  @media ${device.mobileM} {
    font-size: ${fontSizeBase-1}vw;
  }
  @media ${device.mobileL} {
    font-size: ${fontSizeBase-1.8}vw;
  }
  @media ${device.laptop} {
    font-size: ${fontSizeBase-2}vw;
  }
  @media ${device.laptopL} {
    font-size: ${fontSizeBase-2.2}vw;
  }
  @media ${device.desktop} {
    font-size: ${fontSizeBase-2.4}vw;
  }
  @media (min-width: ${device.desktopL}) {
    font-size: ${fontSizeBase-2.6}vw;
  }
`;