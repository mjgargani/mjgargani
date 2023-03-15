import styled from 'styled-components'
import { device } from '../../utils/devices'

const fontSizeBase = 6

export const Container = styled.div`
  font-family: "mjgarganis Lab", sans-serif;
  position: relative;
  height: inherit;
  width: inherit;
  display: table-cell;
  vertical-align: bottom;
  color: black;
  line-height: 180%;
  text-align: center;
  font-weight: bold;
  pointer-events: none;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
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
    font-family: "mjgarganis Lab", sans-serif;
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
