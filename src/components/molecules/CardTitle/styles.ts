import styled from 'styled-components'

import { CardTitleProps } from './types'

export const Container = styled.div<CardTitleProps>`
  position: relative;
  display: table;
  width: 94%;
  padding: 0 3%;
  ${props => props.isContent && "margin: 3% 0;" };
  min-height: ${props => props.isContent ? 20 : 45}%;

  ${props => props.styledCss}
`

export const Title = styled.h2`
  position: relative;
  display: table-cell;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  font-family: 'Sono', sans-serif;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  padding: 0;
`
