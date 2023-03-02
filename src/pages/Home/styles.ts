import styled from "styled-components";
import { device } from "../../components/utils/devices";

const fontSizeBase = 6;

export const Container = styled.div`
  position: fixed;
  min-width: 100vw;
  top: 60vh;
  color: white;
  text-align: center;
  font-weight: bold;
  pointer-events: none;
  -webkit-text-fill-color: black !important;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white !important;
  text-shadow: ${[
    "-3px  -3px 0 #fff",
    "-2px  -2px 0 #fff",
    "-1px  -1px 0 #fff",
    "1px  1px 0 #fff",
    "2px  2px 0 #fff",
    "3px  3px 0 #fff",
    "4px  4px 0 #fff",
    "5px  5px 0 #fff",
    "6px  6px 0 #fff",
  ].join(", ")};
  
  font-size: ${fontSizeBase}vw;
  @media ${device.mobileS} {
    font-size: ${fontSizeBase-0.6}vw;
  }
  @media ${device.mobileM} {
    font-size: ${fontSizeBase-1.2}vw;
  }
  @media ${device.mobileL} {
    font-size: ${fontSizeBase-1.8}vw;
  }
  @media ${device.laptop} {
    font-size: ${fontSizeBase-2.4}vw;
  }
  @media ${device.laptopL} {
    font-size: ${fontSizeBase-3.0}vw;
  }
  @media ${device.desktop} {
    font-size: ${fontSizeBase-3.6}vw;
  }
  @media (min-width: ${device.desktopL}) {
    font-size: ${fontSizeBase-4.2}vw;
  }
`;