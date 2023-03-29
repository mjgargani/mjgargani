import { device } from '../../../utils/devices';
import { type GridContainerProps } from './types';
import styled from 'styled-components';

export const Container = styled.div<GridContainerProps>`
  display: grid;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;

  grid-template-columns: ${(props) => props.templateColumns?.mobile?.join(' ') ?? 'auto'};
  grid-template-rows: ${(props) => props.templateRows?.mobile?.join(' ') ?? 'auto'};
  grid-column-gap: ${(props) => props.columnGap ?? 0}vw;
  grid-row-gap: ${(props) => props.rowGap ?? 0}vh;
  @media ${device.tablet} {
    grid-template-columns: ${(props) => props.templateColumns?.desktop?.join(' ') ?? 'auto'};
    grid-template-rows: ${(props) => props.templateRows?.desktop?.join(' ') ?? 'auto'};
    grid-column-gap: ${(props) => props.columnGap ?? 0}%;
    grid-row-gap: ${(props) => props.rowGap ?? 0}%;
  }

  ${(props) => props.styledCss}
`;
