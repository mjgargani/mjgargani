import styled, { css } from 'styled-components'
import animation from '../../../styles/utils/animation'

import { device } from '../../../utils/devices'
import { type CardProps } from './types'

const opacity = css`
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`

const contentSize = css`
  /* position: absolute; */
  /* max-width: 68.5%; */
  top: 50%;
  transform: translateY(-50%);
  height: unset !important;
  min-height: unset !important;
  width: inherit !important;
`

const defaultSize = css`
  height: 100%;
  min-height: 32vh;
`

export const InnerContent = styled.div`
  position: relative;
  overflow: hidden;
  margin: inherit;
  padding: inherit;
  width: inherit;
  height: 100%;
  animation: ${animation.opacity(0, 1)} 0.5s ease;
`

export const Container = styled.div<CardProps>`
  position: relative;
  overflow: hidden;

  border-style: none;
  border-radius: 5px;
  color: black;
  background-color: rgba(255, 255, 255, 1);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, rgba(217, 217, 217, 1) 100%);
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.25);
  cursor: ${(props) => (props.isContent ? 'default' : 'pointer')};
  animation: ${(props) => (props.isLoading ? animation.opacity(0.25, 0.35) : 'none')} 0.5s ease
    alternate infinite;

  width: 100%;
  opacity: 1;
  ${(props) => (!props.isContent && (opacity && defaultSize))}

  @media  ${device.tablet} and (orientation: landscape) {
    min-height: 35vh;
    ${(props) => (props.isContent && contentSize)}
  }
  @media  ${device.tablet} and (orientation: portrait) {
    min-height: 25vh;
    ${(props) => (props.isContent && contentSize)}
  }

  ${props => props.styledCss}
`

export const ContainerTop = styled.div<Partial<CardProps>>`
  display: ${(props) => (!!props.bgImg ? 'block' : 'none')};
  position: relative;
  height: 55%;
`

export const ContainerBottom = styled.div<Partial<CardProps>>`
  position: relative;
  height: ${(props) => (props.bgImg ? 45 : 100)}%;
`
