import styled, { css } from 'styled-components'

import { CardDescriptionProps } from './types'

const notContent = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  p {
    margin: inherit
  }
`

export const InnerContainer = styled.div<Partial<CardDescriptionProps>>`
  padding: 0 3%;
  width: 94%;
  margin: inherit;
  font-weight: normal;

  ${props => !!!props.isContent && notContent}
`

export const Container = styled.div<CardDescriptionProps>`
  position: relative;
  width: 100%;
  height: ${props => !!!props.isContent ? 55 : 80}%;
  margin: 0;
  padding: 0;

  ${props => props.styledCss}
`
