import { createGlobalStyle, keyframes } from 'styled-components'
import { Color, PageEndPoints } from './globals'

import { device } from './utils/devices'

const h1FontSizeBase = 2
const pFontSizeBase = 1.8

export const frameLinearGradientColors: {
  [key in PageEndPoints]: [Color, Color]
} = {
  '/': ['#0422ce', '#873ea1'],
  '/projects': ['#636311', '#417883'],
  '/about': ['#690808', '#64c773']
}

export const frameShadowAlpha: {
  [key in PageEndPoints]: number
} = {
  '/': 0.5,
  '/projects': 0.9,
  '/about': 0.7
}

export const frameBgPositionTransition = keyframes`
  0%{background-position:5% 0%}
  50%{background-position:96% 100%}
  100%{background-position:5% 0%}
`

export const opacityAnimation = (from: number, to: number) => keyframes`
  from{
    opacity: ${from};
  }
  to{
    opacity: ${to};
  }
`

export const FontStyles = createGlobalStyle`
  * {
    transition: all .25s ease !important;
  }
  a, p, ul, li, ol, i, b, em {
    font-family: sans-serif;
  }
  li:not(:last-child){
    margin-bottom: 1.5vh;
  }
  a{
    font-weight: bold;
    font-family: "Sono", sans-serif;
  }
  a:not(.card-link){
    color: rgb(62, 71, 247, .7);
    text-decoration: none;
    padding: 0 .25%;
    border-radius: .25vw;
  }
  a:not(.card-link):hover{
    color: #FFF;
    background-color: rgb(62, 71, 247, .5);
  }
  code {
    font-weight: bold;
    color: #0f9125;
    padding: 0 .25%;
  }
  h1 {
    font-family: "Sono", sans-serif;
    font-size: ${h1FontSizeBase * 0.9}vh;
    @media ${device.mobileS} {
      font-size: ${h1FontSizeBase * 0.9}vh;
    }
    @media ${device.mobileM} {
      font-size: ${h1FontSizeBase * 0.8}vh;
    }
    @media ${device.mobileL} {
      font-size: ${h1FontSizeBase * 0.8}vh;
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
    text-align: justify;

    font-size: ${pFontSizeBase * 0.9}vh;
    line-height: 150%;
    @media ${device.mobileS} {
      font-size: ${pFontSizeBase * 0.9}vh;
    }
    @media ${device.mobileM} {
      font-size: ${pFontSizeBase * 0.8}vh;
    }
    @media ${device.mobileL} {
      font-size: ${pFontSizeBase * 0.8}vh;
    }
    @media ${device.tablet} {
      font-size: ${pFontSizeBase * 0.6}vw;
      line-height: 125%;
    }
    @media ${device.laptop} {
      font-size: ${pFontSizeBase * 0.6}vw;
      line-height: 150%;
    }
    @media ${device.laptopL} {
      font-size: ${pFontSizeBase * 0.5}vw;
      line-height: 175%;
    }
    @media ${device.desktop} {
      font-size: ${pFontSizeBase * 0.4}vw;
    }
    @media ${device.desktopL} {
      font-size: ${pFontSizeBase * 0.4}vw;
    }
  }
`