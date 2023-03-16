import styled, { css } from 'styled-components'
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
  min-height: ${props => props.isContent ? 90 : 40}%;
  font-weight: normal;
  padding: 0 3%;
  
  ${props => !props.isContent && paragraph}
`
