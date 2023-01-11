import styled from "styled-components";
import { GridCellProps } from "./types";

export const Container = styled.div<GridCellProps>`
  background-color: aliceblue;
  grid-area: ${props => props.area!.join(" / ")};
`;