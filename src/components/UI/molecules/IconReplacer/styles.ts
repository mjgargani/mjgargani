import styled from "styled-components";
import { IconReplacerProps } from "./types";

export const Container = styled.span<Partial<IconReplacerProps>>`
  display: inline;
  ${props => props.darker && "filter: brightness(0.8)"};
  vertical-align: middle;
  font-size: larger;
`;