import styled, { css } from 'styled-components'

import { size } from '../../../utils/devices'
import { CardDescriptionProps } from './types'

const paragraph = css`
  p {
    position: absolute;
    width: 94%;
    top: 50%;
    transform: translateY(-50%);
    vertical-align: middle;
    margin: 0;
  }
`

export const Container = styled.div<CardDescriptionProps>`
  position: relative;
  min-height: ${(props) => (props.isContent ? 79 : 49)}%;
  font-weight: normal;
  padding: 0 3%;

  ${(props) => !props.isContent && paragraph}
  @media (max-width: ${size.tablet}) {
    div[id^='card-about-content'] {
      position: absolute;
      width: 94%;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  ${props => props.styledCss}
`
