import React, { PropsWithChildren } from "react";

import { Container } from "./styles";
import { CardProps } from "./types";
import GridContainer from "../GridContainer";
import GridCell from "../../atoms/GridCell";
import CardDescription from "../../atoms/CardDescription";
import CardTitle from "../../atoms/CardTitle";

const Card: React.FC<PropsWithChildren<CardProps>> = ({
  backgroundColor = "white",
  hoverColor = "whitesmoke",
  bgImg,
  url,
  title = "",
  content = false,
  children
}) => { 
  const cardContent = <GridContainer>
    {bgImg && <GridCell 
      bgImg={{ 
        source: bgImg,
        size: "cover" 
      }}
      style={{
        minHeight: "20vh"
      }}
    />}
    <GridCell style={{ padding: "3%" }}>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{children}</CardDescription>
    </GridCell>
  </GridContainer>

  return <Container 
    backgroundColor={backgroundColor} 
    hoverColor={hoverColor}
    content={content}
  >
    {url ? <a href={url} target="_blank" rel="noreferrer" style={{ 
      color: "black", textDecoration: "none"
    }}>{cardContent}</a> : cardContent}
  </Container>
};

export default Card;