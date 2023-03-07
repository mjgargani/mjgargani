import styled from "styled-components";
import { device } from "../../../utils/devices";

const fontSizeBase = 2.6;
const heightBase = 35;

export const Container = styled.p`
  display: table-cell;
  font-family: sans-serif;
  font-weight: normal;
  vertical-align: middle;
  margin: 10px 0;
  
  height: ${heightBase}px;
  font-size: ${fontSizeBase}vw;
  @media ${device.mobileS} {
    height: ${heightBase-16}px;
    font-size: ${fontSizeBase-0.5}vw;
  }
  @media ${device.mobileM} {
    height: ${heightBase-9}px;
    font-size: ${fontSizeBase-1}vw;
  }
  @media ${device.mobileL} {
    height: ${heightBase+6}px;
    font-size: ${fontSizeBase-1.3}vw;
  }
  @media ${device.laptop} {
    height: ${heightBase+12}px;
    font-size: ${fontSizeBase-1.5}vw;
  }
  @media ${device.laptopL} {
    height: ${heightBase+25}px;
    font-size: ${fontSizeBase-1.7}vw;
  }
`;
