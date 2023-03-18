import styled from 'styled-components'
import { device } from '../../utils/devices'

const fontSizeBase = 6

export const Container = styled.div`
  position: absolute;
  width: inherit;
  bottom: 0;

  font-family: 'mjgarganis Lab', sans-serif;
  text-align: center;
  pointer-events: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height: 180%;

  color: black !important;
  font-weight: bold !important;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white !important;
  text-shadow: ${[
    '-3px  -3px 0 #fff',
    '-2px  -2px 0 #fff',
    '-1px  -1px 0 #fff',
    '1px  1px 0 #fff',
    '2px  2px 0 #fff',
    '3px  3px 0 #fff',
    '4px  4px 0 #fff',
    '5px  5px 0 #fff',
    '6px  6px 0 #fff',
  ].join(', ')};

  span {
    font-family: 'mjgarganis Lab', sans-serif;
  }

  font-size: ${fontSizeBase}vw;
  @media ${device.mobileS} {
    font-size: ${fontSizeBase - 0.6}vw;
  }
  @media ${device.mobileM} {
    font-size: ${fontSizeBase - 1.2}vw;
  }
  @media ${device.mobileL} {
    font-size: ${fontSizeBase - 1.8}vw;
  }
  @media ${device.laptop} {
    font-size: ${fontSizeBase - 2.4}vw;
  }
  @media ${device.laptopL} {
    font-size: ${fontSizeBase - 3.0}vw;
  }
  @media ${device.desktop} {
    font-size: ${fontSizeBase - 3.6}vw;
  }
  @media (min-width: ${device.desktopL}) {
    font-size: ${fontSizeBase - 4.2}vw;
  }
`
