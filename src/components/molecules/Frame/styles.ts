import styled from 'styled-components'

import tile from '../../../assets/tile.png'
import { frameBgPositionTransition, frameLinearGradientColors, frameShadowAlpha, opacityAnimation } from '../../../globalStyles'
import { device } from '../../../utils/devices'
import { type FrameProps } from './types'

export const Shadow = styled.div<FrameProps>`
  position: inherit;
  transition: inherit;
  top: inherit;
  left: inherit;
  margin: inherit;
  padding: inherit;
  width: inherit;
  height: inherit;
  background: -moz-radial-gradient(
    ellipse at 50% 50%,
    rgba(255, 255, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -webkit-radial-gradient(
    ellipse at 50% 50%,
    rgba(255, 255, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -o-radial-gradient(
    ellipse at 50% 50%,
    rgba(255, 255, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -ms-radial-gradient(
    ellipse at 50% 50%,
    rgba(255, 255, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  background: radial-gradient(ellipse at 50% 50%, rgba(255, 255, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  opacity: ${(props) => frameShadowAlpha[props.page]};
  animation: ${(props) => opacityAnimation(
    frameShadowAlpha[props.prevPage || '/'],
    frameShadowAlpha[props.page], 
  )} 1s ease;
  pointer-events: none;
  z-index: -1600;
`

export const Tiles = styled.div`
  position: inherit;
  transition: inherit;
  top: inherit;
  left: inherit;
  margin: inherit;
  padding: inherit;
  width: inherit;
  height: inherit;
  background-image: url(${tile});
  background-repeat: repeat;
  background-size: 10vh;
  @media ${device.tablet} {
    background-size: 8vw;
  }
  opacity: 0.015;
  animation: ${frameBgPositionTransition} 120s alternate-reverse ease infinite;
  pointer-events: none;
  z-index: -1200;
`

export const Container = styled.div<FrameProps>`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  background: linear-gradient(315deg, ${(props) => frameLinearGradientColors[props.page].join(', ')});
  background-size: 200% 200%;
  animation: ${frameBgPositionTransition} 15s ease infinite, ${opacityAnimation(0, 1)} 2s ease;
  z-index: -400;
  transition: unset !important;
`
