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
  ${(props) => Boolean(!props.show) && 'display: none;'}
  z-index: 1000;
  animation: ${opacityTransition} 0.5s ease;
`
