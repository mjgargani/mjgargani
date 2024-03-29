import { type CardThumbnailProps } from './types';
import styled, { css } from 'styled-components';

const badgeBackground = css`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.75);
  opacity: 0.75;
  color: white;
  border-radius: ${(props) => props.theme.common.border.radius};
  padding: 0.25vw;
  margin: 0.25vw;

  p,
  span {
    line-height: 0;
    margin: 0;
    padding: 0;
  }
  .card-counter {
    font-family: 'Sono', sans-serif;
    font-weight: normal;
    top: 10px;
  }
`;

export const IsNew = styled.div<Partial<CardThumbnailProps>>`
  display: ${(props) => (props.bgImg?.new ? 'block' : 'none')};
  ${badgeBackground}
  top: 0;
  left: 0;
`;

export const IsPinned = styled.div<Partial<CardThumbnailProps>>`
  display: ${(props) => (props.bgImg?.pinned ? 'block' : 'none')};
  ${badgeBackground}
  top: 0;
  right: 0;
`;

export const Stars = styled.div<Partial<CardThumbnailProps>>`
  ${badgeBackground}
  bottom: 1.25vh;
  left: 0;
  padding-right: 0.75vw;
`;

export const HomePage = styled.div<Partial<CardThumbnailProps>>`
  display: ${(props) => (props.homePage ? 'block' : 'none')};
  ${badgeBackground}
  bottom: 1.25vh;
  left: 50%;
  min-width: 20%;
  transform: translateX(-50%);

  p {
    text-align: center;
  }

  a {
    cursor: alias;
  }
`;

export const Watchers = styled.div<Partial<CardThumbnailProps>>`
  ${badgeBackground}
  bottom: 1.25vh;
  right: 0;
  padding-right: 0.75vw;
`;

export const Container = styled.div<CardThumbnailProps>`
  min-height: 95%;
  margin-bottom: 5%;

  background-image: url(${(props) => props.bgImg?.source ?? ''});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);

  ${(props) => props.styledCss}
`;
