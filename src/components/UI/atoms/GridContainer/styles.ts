import styled from "styled-components";
import { device } from "../../../utils/devices";
import { GridContainerProps } from "./types";

export const Container = styled.div<GridContainerProps>`
  display: grid;
  
  grid-template-columns: ${props => props.templateColumns?.mobile ? props.templateColumns.mobile.join(" ") : "repeat(1, 1fr)"};
  grid-template-rows: ${props => props.templateRows?.mobile ? props.templateRows.mobile.join(" ") : "auto"};
  @media ${device.tablet} {
    grid-template-columns: ${props => props.templateColumns?.desktop ? props.templateColumns.desktop.join(" ") : "repeat(1, 1fr)"};
    grid-template-rows: ${props => props.templateRows?.desktop ? props.templateRows.desktop.join(" ") : "auto"};  
  }

  grid-column-gap: ${props => props.columnGap}px;
  grid-row-gap: ${props => props.rowGap}px;
`;