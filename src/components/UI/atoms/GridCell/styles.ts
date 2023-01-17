import styled from "styled-components";
import { GridCellProps } from "./types";

export const Container = styled.div<GridCellProps>`
  grid-area: ${props => props.area!.join(" / ")};
`;