import styled from 'styled-components'
import animation from '../../../styles/utils/animation'
import { device } from '../../../utils/devices'

import { NavigationProps } from './types'


export const Hidden = styled.div<Partial<NavigationProps>>`
  height: 100%;
  width: 100%;
  overflow: inherit;
  margin: 0;
  padding: 0;
`

export const Container = styled.div<Partial<NavigationProps>>`
  position: absolute;
  overflow: hidden;
  transition: 300ms;
  text-align: center;
  animation: ${animation.opacity(0, 1)} 0.5s ease;

  height: ${props => !props.isHome ? 80 : 50}%;
  width: 100%;
  bottom: ${props => props.isHome ? 12.5 : 0}%;
  @media ${device.tablet} {
    height: 60%;
    width: ${props => !props.isHome ? 100 : 66.66}%;
    ${props => props.isHome && 'margin-left: 16.67%;'}
    bottom: 0;
  }

  ${props => props.styledCss}
`
