import styled, { keyframes } from 'styled-components'
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
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-style: none;
  border-width: 0px;
  border-radius: 5px;
  color: black;
  background-color: rgba(255, 255, 255, 1);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, rgba(217, 217, 217, 1) 100%);
  opacity: ${(props) => (props.content ? 1 : 0.85)};
  animation: ${(props) => (!props.content ? opacityTransition(1, 0.85) : 'none')} 0.5s ease;

  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, rgba(217, 217, 217, 1) 100%);
    opacity: 1;
    animation: ${(props) => (!props.content ? opacityTransition(0.85, 1) : 'none')} 0.5s ease;
    cursor: ${(props) => (props.content ? 'default' : 'pointer')};
  }
`
