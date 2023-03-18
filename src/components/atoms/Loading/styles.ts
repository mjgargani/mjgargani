import styled, { keyframes } from 'styled-components'
import { device } from '../../../utils/devices'

const potionRotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`

export const Potion = styled.div`
  font-family: 'mjgarganis Lab', Sans-Serif;
  animation: ${potionRotate} 1s infinite linear;
  margin: 0;
  padding: 0;
`

export const Container = styled.div`
  position: fixed;
  opacity: .75;
  text-align: center;
  width: 15%;
  font-size: 6vh;
  @media ${device.tablet} {
    width: 5%;
    font-size: 4vw;
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
`
