import { createGlobalStyle } from "styled-components";
import mjgarganisLabWoff from "./assets/mjgarganis_lab.woff";
import { device } from "./components/utils/devices";

const h1fontSizeBase = 2.7;

const FontStyles = createGlobalStyle`
  @font-face {
    font-family : "mjgarganis Lab";
    src: url(${mjgarganisLabWoff}) format('woff2');
  }
  code {
    color: #3e47f7;
  }
  h1 {
    font-family : "mjgarganis Lab";
    font-size: ${h1fontSizeBase}vw;
    @media ${device.mobileS} {
      font-size: ${h1fontSizeBase-0.5}vw;
    }
    @media ${device.mobileM} {
      font-size: ${h1fontSizeBase-1}vw;
    }
    @media ${device.mobileL} {
      font-size: ${h1fontSizeBase-1.3}vw;
    }
    @media ${device.laptop} {
      font-size: ${h1fontSizeBase-1.5}vw;
    }
    @media ${device.laptopL} {
      font-size: ${h1fontSizeBase-1.7}vw;
    }
  }
`

export default FontStyles;