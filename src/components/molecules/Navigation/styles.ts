import styled, { css, keyframes } from 'styled-components'
import { device } from '../../../utils/devices'
import { NavigationProps } from './types'

const fontSizeBase = 4

export const Show = styled.div<Partial<NavigationProps>>`
  margin: 0;
  padding: 0;
  transform: scale(${props => props.isHome ? 0 : 1});
  min-height: 4vh;
  overflow: hidden;
`

const horizontalResize = (isHome: boolean) => css`
  width: ${isHome ? 50: 75}%;
  margin: 0 ${isHome ? 25: 12.5}%;
`

const opacityTransition = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Container = styled.div<Partial<NavigationProps>>`
  position: absolute;
  width: 80%;
  margin: 0 10%;
  bottom: 0;
  text-align: center;
  animation: ${opacityTransition} 0.5s ease;

  font-size: ${fontSizeBase}vw;
  @media ${device.mobileS} {
    font-size: ${fontSizeBase - 0.5}vw;
  }
  @media ${device.mobileM} {
    font-size: ${fontSizeBase - 1}vw;
  }
  @media ${device.mobileL} {
    font-size: ${fontSizeBase - 1.5}vw;
  }
  @media ${device.tablet} {
    font-size: ${fontSizeBase - 1.7}vw;
    ${props => horizontalResize(props.isHome!)}
  }
  @media ${device.laptop} {
    font-size: ${fontSizeBase - 2}vw;
  }
  @media ${device.laptopL} {
    font-size: ${fontSizeBase - 2.5}vw;
  }
  @media ${device.desktop} {
    font-size: ${fontSizeBase - 3}vw;
  }
  @media ${device.desktopL} {
    font-size: ${fontSizeBase - 3.5}vw;
  }
`
