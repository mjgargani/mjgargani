import styled from "styled-components";
import { GridContainerProps } from "./types";

export const Container = styled.div<GridContainerProps>`
  display: grid;
  /* height: 100vh;
  width: 100vw; */
  grid-template-columns: repeat(${props => props.templateColumns}, 1fr);
  grid-template-rows: repeat(${props => props.templateRows}, 1fr);
  grid-column-gap: ${props => props.columnGap}px;
  grid-row-gap: ${props => props.rowGap}px;
`;