import animation from '../../../styles/utils/animation';
import { device } from '../../../utils/devices';
import { type CardProps } from './types';
import styled, { css } from 'styled-components';

const opacity = css`
  opacity: 0.85;
  animation: ${animation.opacity(1, 0.85)} 0.25s ease;
  &:hover {
    animation: ${animation.opacity(0.85, 1)} 0.25s ease;
    opacity: 1;
  }
`;

const contentSize = css`
  top: 50%;
  transform: translateY(-50%);
  height: unset !important;
  min-height: unset !important;
  width: inherit !important;
`;

const defaultSize = css`
  height: 100%;
  min-height: 32vh;
`;

export const InnerContent = styled.div`
  position: relative;
  overflow: hidden;
  margin: inherit;
  padding: inherit;
  width: inherit;
  height: 100%;
`;

const loadingAnimation = css`
  animation: ${animation.opacity(0.25, 0.35)} 0.5s ease alternate infinite !important;
`;

export const Container = styled.div<CardProps>`
  position: relative;
  overflow: hidden;

  border-style: none;
  border-radius: ${(props) => props.theme.common.border.radius};
  color: black;
  background-color: rgba(255, 255, 255, 1);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, rgba(217, 217, 217, 1) 100%);
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.25);
  cursor: ${(props) => (props.isContent ? 'default' : 'pointer')};
  ${(props) => Boolean(props.isLoading) && loadingAnimation};

  width: 100%;
  opacity: 1;
  ${(props) => !props.isContent && defaultSize}

  @media ${device.tablet} {
    ${(props) => !props.isContent && opacity}
  }
  @media ${device.tablet} and (orientation: landscape) {
    min-height: 35vh;
    ${(props) => props.isContent && contentSize}
  }
  @media ${device.tablet} and (orientation: portrait) {
    min-height: 25vh;
    ${(props) => props.isContent && contentSize}
  }

  ${(props) => props.styledCss}
`;

export const ContainerTop = styled.div<Partial<CardProps>>`
  position: relative;
  height: 55%;
`;

export const ContainerBottom = styled.div<Partial<CardProps>>`
  position: relative;
  height: ${(props) => (props.isContent ? 100 : 45)}%;
`;
