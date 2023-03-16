import styled from 'styled-components'
import { device } from '../../../utils/devices'
import { type CardProps } from './types'

export const Container = styled.div<CardProps>`
  overflow: auto;

  transition: all .5s ease;
  border-style: none;
  border-radius: 5px;
  color: black;
  background-color: rgba(255, 255, 255, 1);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, rgba(217, 217, 217, 1) 100%);
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.25);
  cursor: ${(props) => (props.content ? 'default' : 'pointer')};
  
  height: 100%;
  min-height: 33vh;
  opacity: 1;
  @media ${device.mobileS}{
    min-height: 31vh;
  }
  @media ${device.mobileM}{
    min-height: 25vh;
  }
  @media ${device.mobileL}{
    min-height: 24vh;
  }
  @media ${device.tablet}{
    min-height: 24vh;
    opacity: .7;
    &:hover {
      opacity: 1;
    }
  }
  @media ${device.laptop}{
    height: 60vh;
  }
  @media ${device.desktop}{
    height: 58vh;
  }
`

export const ContainerTop = styled.div<Partial<CardProps>>`
  display: ${props => !!props.bgImg ? "block" : "none"};
  position: relative;
  height: 55%;
`

export const ContainerBottom = styled.div<Partial<CardProps>>`
  position: relative;
  height: ${props => props.bgImg ? 45 : 100}%;
`
