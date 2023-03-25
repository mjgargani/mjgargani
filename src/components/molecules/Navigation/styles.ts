import styled, { keyframes } from 'styled-components'

import { NavigationProps } from './types'

// const styles = css``

export const Show = styled.div<Partial<NavigationProps>>`
  /* transform: scale(${(props) => (props.isHome ? 0 : 1)}); */
  height: inherit;
  width: inherit;
  overflow: inherit;
  margin: 0;
  padding: 0;
`

const opacityTransition = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Container = styled.div<Partial<NavigationProps>>`
  overflow: hidden;
  transition: 300ms;
  width: 100%;
  height: 100%;
  /* margin: 0 ${props => props.isHome ? 20 : 25}%; */
  bottom: 0;
  text-align: center;
  animation: ${opacityTransition} 0.5s ease;

  ${props => props.styledCss}
`
