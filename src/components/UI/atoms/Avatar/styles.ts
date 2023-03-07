import styled from "styled-components";
import { device } from "../../../utils/devices";
import { AvatarProps } from "./types";

const imageSizeBase = 64;

export const Container = styled.div<AvatarProps>`
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;

  height: ${imageSizeBase}px;
  width: ${imageSizeBase}px;
  @media ${device.mobileS} {
    height: ${imageSizeBase + 4}px;
    width: ${imageSizeBase + 4}px;
  }
  @media ${device.mobileM} {
    height: ${imageSizeBase + 8}px;
    width: ${imageSizeBase + 8}px;
  }
  @media ${device.mobileL} {
    height: ${imageSizeBase + 16}px;
    width: ${imageSizeBase + 16}px;
  }
  @media ${device.laptop} {
    height: ${imageSizeBase + 32}px;
    width: ${imageSizeBase + 32}px;
  }
  @media ${device.laptopL} {
    height: ${imageSizeBase + 48}px;
    width: ${imageSizeBase + 48}px;
  }
`;