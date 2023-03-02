import styled from "styled-components";
import { device } from "../../../utils/devices";

const titleFontSizeBase = 4;
const iconFontSizeBase = 4.5;

export const MainContainer = styled.p`
  text-transform: uppercase;
  text-align: center;

  font-size: ${titleFontSizeBase}vw;
  @media ${device.mobileS} {
    font-size: ${titleFontSizeBase-0.5}vw;
  }
  @media ${device.mobileM} {
    font-size: ${titleFontSizeBase-1}vw;
  }
  @media ${device.mobileL} {
    font-size: ${titleFontSizeBase-1.5}vw;
  }
  @media ${device.laptop} {
    font-size: ${titleFontSizeBase-2}vw;
  }
  @media ${device.laptopL} {
    font-size: ${titleFontSizeBase-2.5}vw;
  }
  @media ${device.desktop} {
    font-size: ${titleFontSizeBase-3}vw;
  }
  @media (min-width: ${device.desktopL}) {
    font-size: ${titleFontSizeBase-3.5}vw;
  }
`;

export const IconContainer = styled.p`
  margin-top: 2%;

  font-size: ${iconFontSizeBase}vw;
  @media ${device.mobileS} {
    font-size: ${iconFontSizeBase-0.5}vw;
  }
  @media ${device.mobileM} {
    font-size: ${iconFontSizeBase-1}vw;
  }
  @media ${device.mobileL} {
    font-size: ${iconFontSizeBase-1.5}vw;
  }
  @media ${device.laptop} {
    font-size: ${iconFontSizeBase-2}vw;
  }
  @media ${device.laptopL} {
    font-size: ${iconFontSizeBase-2.5}vw;
  }
  @media ${device.desktop} {
    font-size: ${iconFontSizeBase-3}vw;
  }
  @media (min-width: ${device.desktopL}) {
    font-size: ${iconFontSizeBase-3.5}vw;
  }
`;