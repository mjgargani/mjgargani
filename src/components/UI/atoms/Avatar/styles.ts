import styled from "styled-components";
import { AvatarProps } from "./types";

export const Container = styled.div<AvatarProps>`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top left;

  height: 100%;
  width: 100%;
`;