import styled from "styled-components";
import { FlexContainerProps } from "./types";

const Container = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${props => props.direction!};
  background-color: rgb(0, 0, 255, .5);
`

export default Container;