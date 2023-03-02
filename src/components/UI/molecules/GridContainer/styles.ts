import styled from "styled-components";
import { device } from "../../../utils/devices";
import { GridContainerProps } from "./types";

export const Container = styled.div<GridContainerProps>`
  display: grid;
  
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  @media ${device.mobileL} {
    grid-template-columns: repeat(${props => props.templateColumns}, 1fr);
    grid-template-rows: ${props => props.templateRows ? `repeat(${props.templateRows}, 1fr)` : "auto"};  
  }

  grid-column-gap: ${props => props.columnGap}px;
  grid-row-gap: ${props => props.rowGap}px;
`;