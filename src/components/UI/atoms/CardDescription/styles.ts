import styled from "styled-components";
import { device } from "../../../utils/devices";

const heightBase = 50;

export const Container = styled.div`
  display: table-cell;
  font-weight: normal;
  vertical-align: middle;
  margin: 10px 0;
  
  height: ${heightBase}px;
  @media ${device.mobileS} {
    height: ${heightBase*0.6}px;
  }
  @media ${device.mobileM} {
    height: ${heightBase*0.8}px;
  }
  @media ${device.mobileL} {
    height: ${heightBase*0.9}px;
  }
  @media ${device.tablet} {
    height: ${heightBase*1.1}px;
  }
  @media ${device.laptop} {
    height: ${heightBase*1.2}px;
  }
  @media ${device.laptopL} {
    height: ${heightBase*1.5}px;
  }
  @media ${device.desktop} {
    height: ${heightBase*1.55}px;
  }
  @media ${device.desktopL} {
    height: ${heightBase*1.6}px;
  }
`;
