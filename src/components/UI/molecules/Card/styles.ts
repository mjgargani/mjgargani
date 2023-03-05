import styled from "styled-components";
import { device } from "../../../utils/devices";
import { CardProps } from "./types";

export const Container = styled.div<CardProps>`
  margin: 10px;
  
  ${props => !props.content ? 
  `min-height: 50px;
    @media ${device.mobileS} {
      min-height: 60px;
    }
    @media ${device.mobileM} {
      min-height: 70px;
    }
    @media ${device.mobileL} {
      min-height: 80px;
    }
    @media ${device.laptop} {
      min-height: 90px;
    }
    @media ${device.laptopL} {
      min-height: 100px;
    }
    @media ${device.desktop} {
      min-height: 110px;
    }
    @media ${device.desktopL} {
      min-height: 120px;
    }`: "min-height: 95%;"}

  border-style: none;
  border-width: 0px;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  background-color: ${props => props.backgroundColor!};

  &:hover {
    background-color: ${props => !!props.content ? props.backgroundColor! : props.hoverColor!};
    cursor: ${props => !!props.content ? "default" : "pointer"};
  }
`;