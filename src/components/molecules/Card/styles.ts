import styled, { css, keyframes } from 'styled-components'

import { device, size } from '../../../utils/devices'
import { type CardProps } from './types'

const opacity = css`
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`

const opacityTransition = (from?: number, to?: number) => keyframes`
  from {
    opacity: ${from || 0};
  }
  to {
    opacity: ${to || 1};
  }
`

const contentSize = css`
  position: absolute;
  max-width: 68.5%;
  top: 50%;
  transform: translateY(-50%);
  height: unset !important;
  min-height: unset !important;
  width: inherit !important;
`

export const InnerContent = styled.div`
  position: relative;
  overflow: hidden;
  margin: inherit;
  padding: inherit;
  width: inherit;
  height: 100%;
  animation: ${opacityTransition()} 0.5s ease;
`

export const Container = styled.div<CardProps>`
  overflow: hidden;

  border-style: none;
  border-radius: 5px;
  color: black;
  background-color: rgba(255, 255, 255, 1);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, rgba(217, 217, 217, 1) 100%);
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.25);
  cursor: ${(props) => (props.isContent ? 'default' : 'pointer')};
  animation: ${(props) => (props.isLoading ? opacityTransition(0.25, 0.35) : 'none')} 0.5s ease
    alternate infinite;

  height: 100%;
  min-height: 33vh;
  opacity: 1;
  @media ${device.mobileS} {
    min-height: 31vh;
  }
  @media ${device.mobileM} {
    min-height: 29vh;
  }
  @media ${device.mobileL} {
    min-height: 30vh;
  }
  @media ${device.tablet} {
    min-height: 35vh;
    ${(props) => (!props.isContent ? opacity : contentSize)}
  }
  @media (max-width: ${size.laptop}px) and (min-height: ${size.laptop}px) {
    min-height: 25vh !important;
  }
  @media ${device.laptop} {
    min-height: 45vh;
  }
  @media ${device.laptopL} {
    min-height: 50vh;
  }
  @media ${device.desktop} {
    min-height: 45vh;
  }
  @media ${device.desktopL} {
    min-height: 40vh;
  }

  ${props => props.styledCss}
`

export const ContainerTop = styled.div<Partial<CardProps>>`
  display: ${(props) => (!!props.bgImg ? 'block' : 'none')};
  position: relative;
  height: 55%;
`

export const ContainerBottom = styled.div<Partial<CardProps>>`
  position: relative;
  height: ${(props) => (props.bgImg ? 45 : 100)}%;
`
