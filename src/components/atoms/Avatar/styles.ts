import styled from 'styled-components'

import { type AvatarProps } from './types'

export const Container = styled.div<AvatarProps>`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center left;
  border-radius: calc(0.5vw + 0.5vh);

  height: 100%;
  width: 100%;

  ${(props) => props.styledCss}
`
