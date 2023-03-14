import styled from 'styled-components'
import { device } from '../../../utils/devices'
import { type CardThumbnailProps } from './types'

export const Container = styled.div<CardThumbnailProps>`
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);

  min-height: 10vh;
  @media ${device.tablet} {
    min-height: 20vh;
  }
`
