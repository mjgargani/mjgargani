import styled from "styled-components";
import { device } from "../../../utils/devices";

const heightBase = 50;

export const Container = styled.p`
  display: table-cell;
  font-weight: normal;
  vertical-align: middle;
  margin: 10px 0;
  
  height: ${heightBase}px;
  @media ${device.mobileS} {
    height: ${heightBase-16}px;
  }
  @media ${device.mobileM} {
    height: ${heightBase-9}px;
  }
  @media ${device.mobileL} {
    height: ${heightBase+6}px;
  }
  @media ${device.laptop} {
    height: ${heightBase+12}px;
  }
  @media ${device.laptopL} {
    height: ${heightBase+25}px;
  }
`;
