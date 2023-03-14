import styled from 'styled-components'
import { device } from '../../../utils/devices'

const fontSizeBase = 4
const bottomMobileBase = 7.5
const bottomDesktopBase = 17.5

export const Container = styled.div`
  position: fixed;
  width: 75vw;
  margin: 0 12.5vw;
  text-align: center;

  bottom: ${bottomMobileBase}%;
  font-size: ${fontSizeBase}vw;
  @media ${device.mobileS} {
    bottom: ${bottomMobileBase}%;
    font-size: ${fontSizeBase - 0.5}vw;
  }
  @media ${device.mobileM} {
    bottom: ${bottomMobileBase}%;
    font-size: ${fontSizeBase - 1}vw;
  }
  @media ${device.mobileL} {
    bottom: ${bottomMobileBase}%;
    font-size: ${fontSizeBase - 1.5}vw;
  }
  @media ${device.tablet} {
    bottom: ${bottomDesktopBase}%;
    font-size: ${fontSizeBase - 1.7}vw;
  }
  @media ${device.laptop} {
    bottom: ${bottomDesktopBase}%;
    font-size: ${fontSizeBase - 2}vw;
  }
  @media ${device.laptopL} {
    bottom: ${bottomDesktopBase}%;
    font-size: ${fontSizeBase - 2.5}vw;
  }
  @media ${device.desktop} {
    bottom: ${bottomDesktopBase}%;
    font-size: ${fontSizeBase - 3}vw;
  }
  @media ${device.desktopL} {
    bottom: ${bottomDesktopBase}%;
    font-size: ${fontSizeBase - 3.5}vw;
  }
`
