import tile from '../../../assets/tile.webp';
import animation from '../../../styles/utils/animation';
import { device } from '../../../utils/devices';
import { type FrameProps } from './types';
import styled from 'styled-components';

export const Shadow = styled.div<FrameProps>`
  position: inherit;
  transition: inherit;
  top: inherit;
  left: inherit;
  margin: inherit;
  padding: inherit;
  width: inherit;
  height: inherit;
  background: -moz-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  background: -webkit-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  background: -o-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  background: -ms-radial-gradient(ellipse at 50% 50%, rgba(255, 255, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  background: radial-gradient(ellipse at 50% 50%, rgba(255, 255, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  opacity: ${(props) => props.theme.frame[props.page].shadow};
  animation: ${(props) =>
      animation.opacity(props.theme.frame[props.prevPage!].shadow, props.theme.frame[props.page].shadow)}
    1s ease;
  pointer-events: none;
  z-index: -1600;

  ${(props) => props.styledCss}
`;

export const Tiles = styled.div<Partial<FrameProps>>`
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
  animation: ${(props) => animation.bg.position(props.bgMov!)} 120s alternate-reverse ease infinite;
  pointer-events: none;
  z-index: -1200;

  ${(props) => props.styledCss}
`;

export const Container = styled.div<FrameProps>`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  background: linear-gradient(315deg, ${(props) => props.theme.frame[props.page].color.join(', ')});
  background-size: 200% 200%;
  animation: ${(props) => animation.bg.position(props.bgMov!)} 15s ease infinite, ${animation.opacity(0, 1)} 2s ease;
  z-index: -400;
  transition: unset !important;

  ${(props) => props.styledCss}
`;
