import { createGlobalStyle } from "styled-components";
import mjgarganisLabWoff from "./assets/mjgarganis_lab.woff";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family : "mjgarganis Lab";
    src: url(${mjgarganisLabWoff}) format('woff2');
  }
  code {
    color: #3e47f7;
  }
`

export default FontStyles;