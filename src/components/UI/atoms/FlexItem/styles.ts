import styled from "styled-components";
import { FlexItemProps } from "./types";

const Container = styled.div<FlexItemProps>`
  display: flex;
  flex: ${props => props.flex};
`

export default Container;