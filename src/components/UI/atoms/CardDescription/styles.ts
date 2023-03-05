import styled from "styled-components";
import { device } from "../../../utils/devices";

const fontSizeBase = 2.6;

export const Container = styled.p`
  font-family: sans-serif;
  font-weight: normal;

  font-size: ${fontSizeBase}vw;
  @media ${device.mobileS} {
    font-size: ${fontSizeBase-0.5}vw;
  }
  @media ${device.mobileM} {
    font-size: ${fontSizeBase-1}vw;
  }
  @media ${device.mobileL} {
    font-size: ${fontSizeBase-1.3}vw;
  }
  @media ${device.laptop} {
    font-size: ${fontSizeBase-1.5}vw;
  }
  @media ${device.laptopL} {
    font-size: ${fontSizeBase-1.7}vw;
  }
`;
