import React from "react";

import { Container } from "./styles";
import { CardProps } from "./types";
import GridContainer from "../GridContainer";
import GridCell from "../../atoms/GridCell";
import CardDescription from "../../atoms/CardDescription";
import CardTitle from "../../atoms/CardTitle";

const Card: React.FC<CardProps> = ({
  backgroundColor = "white",
  hoverColor = "whitesmoke",
  bgImg = "",
  url = "",
  title = "",
  description = "",
}) => <Container 
  backgroundColor={backgroundColor} 
  hoverColor={hoverColor}
>
  <a href={url} target="_blank" rel="noreferrer" style={{ 
    color: "black", textDecoration: "none"
  }}>
    <GridContainer>
      {/* <GridCell 
        bgImg={{ 
          source: bgImg,
          size: "cover" 
        }}
        style={{
          // minHeight: 100
        }}
      ></GridCell> */}
      <GridCell style={{ padding: "3%" }}>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </GridCell>
    </GridContainer>
  </a>
</Container>;

export default Card;