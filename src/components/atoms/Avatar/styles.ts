import styled from 'styled-components'

import { type AvatarProps } from './types'

export const Container = styled.div<AvatarProps>`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: .5vw;

  height: 80%;
  margin: 10% 0;
  width: 100%;
`
