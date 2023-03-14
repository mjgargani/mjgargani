import styled, { keyframes } from 'styled-components'
import { device } from '../../../utils/devices'
import { type CardProps } from './types'

const opacityTransition = (from: number, to: number) => keyframes`
  from{
    opacity: ${from};
  }
  to{
    opacity: ${to};
  }
`

export const Container = styled.div<CardProps>`
  ${(props) =>
    props.content
      ? `min-height: 50px;
    @media ${device.mobileS} {
      min-height: 60px;
    }
    @media ${device.mobileM} {
      min-height: 70px;
    }
    @media ${device.mobileL} {
      min-height: 80px;
    }
    @media ${device.laptop} {
      min-height: 90px;
    }
    @media ${device.laptopL} {
      min-height: 100px;
    }
    @media ${device.desktop} {
      min-height: 110px;
    }
    @media ${device.desktopL} {
      min-height: 120px;
    }`
      : 'min-height: 95%;'}

  border-style: none;
  border-width: 0px;
  border-radius: 5px;
  color: black;
  background-color: rgba(255, 255, 255, 1);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, rgba(217, 217, 217, 1) 100%);
  opacity: ${(props) => (props.content ? 1 : 0.85)};
  animation: ${(props) => (!props.content ? opacityTransition(1, 0.85) : 'none')} 0.5s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, rgba(217, 217, 217, 1) 100%);
    opacity: 1;
    animation: ${(props) => (!props.content ? opacityTransition(0.85, 1) : 'none')} 0.5s ease;
    cursor: ${(props) => (props.content ? 'default' : 'pointer')};
  }
`
