import styled from "styled-components";
import { FlexContainerProps } from "./types";

const Container = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${props => props.direction};
`

export default Container;