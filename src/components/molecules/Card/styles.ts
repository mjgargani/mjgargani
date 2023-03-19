import styled, { css } from 'styled-components'
import { device, size } from '../../../utils/devices'
import { type CardProps } from './types'

const opacity = css`
  opacity: 0.7;
  &:hover {
    opacity: 1;
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

  height: 100%;
  min-height: 33vh;
  opacity: 1;
  @media ${device.mobileS} {
    min-height: 31vh;
  }
  @media ${device.mobileM} {
    min-height: 25vh;
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
    min-height: 50vh;
  }
  @media ${device.laptopL} {
    min-height: 56vh;
  }
  @media ${device.desktop} {
    min-height: 40vh;
  }
  @media ${device.desktopL} {
    min-height: 48vh;
  }
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
