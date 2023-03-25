import styled from 'styled-components'
import { CommonProps } from '../../../globals'

export const Container = styled.div<CommonProps>`
  position: fixed;
  top: 0;
  right: 0;

  margin: 0;
  padding: 0;

  ul {
    margin: 0;
    padding: 0;
    margin: 0.5vh 0.25vw 0 0;
  }
  li {
    display: inline;
    list-style: none;
    margin: 0 0 0 0.5vw;
    padding: 0;
  }

  ${props => props.styledCss}
`
