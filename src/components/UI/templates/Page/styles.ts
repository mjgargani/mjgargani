import styled from "styled-components";
import { PageProps } from "./types";

export const Container = styled.button<PageProps>`
  display:  ${props => !!props.show ? 'block' : 'none'};
`;