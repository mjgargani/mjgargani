import styled from "styled-components";
import { PageProps } from "./types";

export const Container = styled.div<PageProps>`
  display:  ${props => !!props.show ? 'block' : 'none'};
`;