import styled from 'styled-components'
import { type GridCellProps } from './types'

export const Container = styled.div<GridCellProps>`
  grid-area: ${(props) => props.area!.join(' / ')};
  background-image: url(${(props) => props.bgImg!.source!});
  background-size: ${(props) => props.bgImg!.size!};
  background-position: center;
  background-repeat: no-repeat;
`
