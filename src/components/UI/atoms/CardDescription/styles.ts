import styled from "styled-components";
import { device } from "../../../utils/devices";

const fontSizeBase = 2.6;

export const Container = styled.p`
  display: table-cell;
  font-family: sans-serif;
  font-weight: normal;
  vertical-align: middle;
  margin: 10px 0;
  
  height: 50px;
  font-size: ${fontSizeBase}vw;
  @media ${device.mobileS} {
    height: 25px;
    font-size: ${fontSizeBase-0.5}vw;
  }
  @media ${device.mobileM} {
    height: 30px;
    font-size: ${fontSizeBase-1}vw;
  }
  @media ${device.mobileL} {
    height: 40px;
    font-size: ${fontSizeBase-1.3}vw;
  }
  @media ${device.laptop} {
    height: 50px;
    font-size: ${fontSizeBase-1.5}vw;
  }
  @media ${device.laptopL} {
    height: 60px;
    font-size: ${fontSizeBase-1.7}vw;
  }
`;
