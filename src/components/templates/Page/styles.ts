import styled, { keyframes } from 'styled-components'

import { type PageProps } from './types'

const opacityTransition = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Container = styled.div<PageProps>`
  display: ${(props) => (props.show! ? 'block' : 'none')};
  min-height: 100%;
  width: 80%;
  margin: 0 10%;
  animation: ${opacityTransition} 0.5s ease;

  ${props => props.styledCss}
`
