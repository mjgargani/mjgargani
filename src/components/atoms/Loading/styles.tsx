import animation from '../../../styles/utils/animation';
import { device } from '../../../utils/devices';
import { type LoadingProps } from './types';
import styled, { css } from 'styled-components';

const card = css`
  position: absolute !important;
  color: black !important;
  width: 100% !important;
  background-color: unset !important;
  border-radius: unset !important;
`;

export const Potion = styled.div`
  font-family: 'mjgarganis Lab', Sans-Serif;
  font-size: 400%;
  animation: ${animation.rotate(0, 359)} 1s infinite linear;
  margin: 0;
  padding: 0;
`;

export const Container = styled.div<LoadingProps>`
  position: fixed;
  opacity: 0.5;
  text-align: center;
  width: 15%;
  @media ${device.tablet} {
    width: 5%;
  }
  height: min-content;
  top: 50%;
  left: 50%;
  margin: 0;
  padding: 0;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: ${(props) => props.theme.common.border.radius};
  ${(props) => props.isCard && card}
  animation: ${animation.opacity(0, 1)} 2s ease alternate infinite;

  ${(props) => props.styledCss}
`;
