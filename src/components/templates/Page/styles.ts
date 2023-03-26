import styled from 'styled-components'

import animation from '../../../styles/utils/animation'
import { type PageProps } from './types'

export const Container = styled.div<PageProps>`
  display: ${(props) => (props.show! ? 'block' : 'none')};
  min-height: 100%;
  width: 100%;
  animation: ${animation.opacity(0, 1)} 0.5s ease;

  ${(props) => props.styledCss}
`
