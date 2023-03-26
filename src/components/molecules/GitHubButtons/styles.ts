import styled from 'styled-components'

import { CommonProps } from '../../../globals'

export const Container = styled.div<CommonProps>`
  position: fixed;
  top: 0.5vh;
  right: 0;
  width: max-content;

  * {
    all: unset !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  li {
    display: inline !important;
    list-style: none !important;
    margin-right: 0.2vw !important;
    cursor: pointer !important;
  }

  ${(props) => props.styledCss}
`
