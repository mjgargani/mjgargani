import styled from "styled-components";
import { PageProps } from "./types";

export const Container = styled.div<PageProps>`
  position: fixed;
  z-index: 1000;
  display:  ${props => !!props.show ? 'block' : 'none'};
`;