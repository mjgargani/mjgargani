import styled from "styled-components";
import { FlexItemProps } from "./types";

const Container = styled.div<FlexItemProps>`
  background-color: rgb(255, 165, 0, .5);
  flex: ${props => props.flex!.join(" ")};
`

export default Container;