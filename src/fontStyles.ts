import { createGlobalStyle } from 'styled-components'
import { device } from './utils/devices'

const h1FontSizeBase = 2
const pFontSizeBase = 1.8

const FontStyles = createGlobalStyle`
  a, p, ul, li, ol, i, b, em {
    font-family: sans-serif;
  }
  li:not(:last-child){
    margin-bottom: 1.5vh;
  }
  a:not(.card-link){
    color: #3e47f7;
    text-decoration: none;
    padding: 0 .25%;
  }
  a:not(.card-link):hover{
    color: #FFF;
    background-color: #3e47f7;
  }
  code {
    font-weight: bold;
    color: #0f9125;
    padding: 0 .25%;
  }
  h1 {
    font-weight: normal;
    font-size: ${h1FontSizeBase * 0.5}vh;
    @media ${device.mobileS} {
      font-size: ${h1FontSizeBase * 0.6}vh;
    }
    @media ${device.mobileM} {
      font-size: ${h1FontSizeBase * 0.7}vh;
    }
    @media ${device.mobileL} {
      font-size: ${h1FontSizeBase * 0.7}vh;
    }
    @media ${device.tablet} {
      font-size: ${h1FontSizeBase * 0.6}vw;
    }
    @media ${device.laptop} {
      font-size: ${h1FontSizeBase * 0.6}vw;
    }
    @media ${device.laptopL} {
      font-size: ${h1FontSizeBase * 0.5}vw;
    }
    @media ${device.desktop} {
      font-size: ${h1FontSizeBase * 0.4}vw;
    }
    @media ${device.desktopL} {
      font-size: ${h1FontSizeBase * 0.4}vw;
    }
  }
  h1 span {
    font-size: larger;
  }
  p, li {
    font-size: ${pFontSizeBase * 0.5}vh;
    @media ${device.mobileS} {
      font-size: ${pFontSizeBase * 0.6}vh;
    }
    @media ${device.mobileM} {
      font-size: ${pFontSizeBase * 0.7}vh;
    }
    @media ${device.mobileL} {
      font-size: ${pFontSizeBase * 0.7}vh;
    }
    @media ${device.tablet} {
      font-size: ${pFontSizeBase * 0.6}vw;
    }
    @media ${device.laptop} {
      font-size: ${pFontSizeBase * 0.6}vw;
    }
    @media ${device.laptopL} {
      font-size: ${pFontSizeBase * 0.5}vw;
    }
    @media ${device.desktop} {
      font-size: ${pFontSizeBase * 0.4}vw;
    }
    @media ${device.desktopL} {
      font-size: ${pFontSizeBase * 0.4}vw;
    }
  }
`

export default FontStyles
