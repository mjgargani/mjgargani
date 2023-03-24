import styled, { css, keyframes } from 'styled-components'

import { device } from '../../../utils/devices'
import { LoadingProps } from './types'

const potionRotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`

const opacityTransition = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`

const card = css`
  position: absolute !important;
  color: black !important;
  width: 100% !important;
  background-color: unset !important;
  border-radius: unset !important;
`

export const Potion = styled.div`
  font-family: 'mjgarganis Lab', Sans-Serif;
  animation: ${potionRotate} 1s infinite linear;
  margin: 0;
  padding: 0;
`

export const Container = styled.div<LoadingProps>`
  position: fixed;
  opacity: 0.5;
  text-align: center;
  width: 15%;
  @media ${device.tablet} {
    width: 5%;
  }
  height: min-content;
  top: 50%;
  left: 50%;
  margin: 0;
  padding: 0;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 5px;
  ${(props) => props.isCard && card}
  animation: ${opacityTransition} 2s ease alternate infinite;
`
