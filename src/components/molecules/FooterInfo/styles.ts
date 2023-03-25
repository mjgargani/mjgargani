import styled from 'styled-components'
import { CommonProps } from '../../../globals'

export const Container = styled.div<CommonProps>`
  position: absolute;
  width: inherit;
  bottom: 0;
  display: inline-block;
  font-family: sans-serif;
  font-weight: normal;
  text-align: center;
  text-shadow: 0 1.5px 0 black;
  opacity: 0.5;
  color: white;

  p {
    margin: 0;
    margin-bottom: 0.5vh;
    text-align: center;
  }

  ${props => props.styledCss}
`
