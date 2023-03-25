import styled, { css } from 'styled-components'

import { type GridCellProps } from './types'

const background = (source: string, size: string) => css`
  background-image: url(${source});
  background-size: ${size};
  background-position: center;
  background-repeat: no-repeat;
`

export const Container = styled.div<GridCellProps>`
  margin: 0;
  padding: 0;
  
  grid-area: ${(props) => (props.area?.length ? props.area.join(' / ') : 'unset')};
  ${(props) => props.bgImg && background(props.bgImg.source!, props.bgImg.size!)}

  ${props => props.styledCss}
`
