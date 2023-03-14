import styled, { keyframes } from 'styled-components'
import { device } from '../../../utils/devices'
import { type PageProps } from './types'

const opacityTransition = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const heightBase = 65
const marginBase = [4, 8, 0, 8]

export const Container = styled.div<PageProps>`
  ${(props) => Boolean(!props.show) && 'display: none;'}
  z-index: 1000;
  overflow: auto;
  width: 84vw;
  padding-right: .5%;
  animation: ${opacityTransition} 0.5s ease;

  height: ${heightBase * 0.93}vh;
  margin: ${marginBase[0]}vh ${marginBase[1]}vw ${marginBase[2]}vh ${marginBase[3]}vw;
  @media ${device.mobileS} {
    height: ${heightBase * 0.93}vh;
    margin: ${marginBase[0]}vh ${marginBase[1]}vw ${marginBase[2]}vh ${marginBase[3]}vw;
  }
  @media ${device.mobileM} {
    height: ${heightBase * 0.94}vh;
    margin: ${marginBase[0]}vh ${marginBase[1]}vw ${marginBase[2]}vh ${marginBase[3]}vw;
  }
  @media ${device.mobileL} {
    height: ${heightBase * 0.95}vh;
    margin: ${marginBase[0]}vh ${marginBase[1]}vw ${marginBase[2]}vh ${marginBase[3]}vw;
  }
  @media ${device.tablet} {
    height: ${heightBase * 0.82}vh;
    margin: ${marginBase[0] + 14}vh ${marginBase[1]}vw ${marginBase[2]}vh ${marginBase[3]}vw;
  }
  @media ${device.laptop} {
    height: ${heightBase * 0.82}vh;
    margin: ${marginBase[0] + 14}vh ${marginBase[1]}vw ${marginBase[2]}vh ${marginBase[3]}vw;
  }
  @media ${device.laptopL} {
    height: ${heightBase * 0.81}vh;
    margin: ${marginBase[0] + 14}vh ${marginBase[1]}vw ${marginBase[2]}vh ${marginBase[3]}vw;
  }
  @media ${device.desktop} {
    height: ${heightBase * 0.8}vh;
    margin: ${marginBase[0] + 14}vh ${marginBase[1]}vw ${marginBase[2]}vh ${marginBase[3]}vw;
  }
  @media ${device.desktopL} {
    height: ${heightBase * 0.8}vh;
    margin: ${marginBase[0] + 14}vh ${marginBase[1]}vw ${marginBase[2]}vh ${marginBase[3]}vw;
  }
`
