import React, { PropsWithChildren } from "react";

import { Container } from "./styles";
import { CardProps } from "./types";
import GridContainer from "../../atoms/GridContainer";
import GridCell from "../../atoms/GridCell";
import CardDescription from "../../atoms/CardDescription";
import CardTitle from "../CardTitle";
import CardThumbnail from "../../atoms/CardThumbnail";
import { testIdName } from "../../../utils/testIdName";

const Card: React.FC<PropsWithChildren<CardProps>> = ({
  dataTestId = testIdName("card"),
  bgImg,
  url,
  title = "",
  content = false,
  children
}) => { 
  const cardContent: JSX.Element = <GridContainer>
    {bgImg && <GridCell>
      <CardThumbnail bgImg={bgImg} />
    </GridCell>}
    <GridCell style={{ padding: "0 2%" }}>
      <CardTitle>{title}</CardTitle>
    </GridCell>
    <GridCell 
      style={{ 
        padding: "0 3%",
        borderRadius: "0 0 5px 5px",
      }}
    >
      <CardDescription>{children}</CardDescription>
    </GridCell>
  </GridContainer>

  return <Container
    data-testid={dataTestId}
    content={content}
  >
    {url ? <a href={url} target="_blank" rel="noreferrer" style={{ 
      color: "black", textDecoration: "none"
    }}>{cardContent}</a> : cardContent}
  </Container>
};

export default Card;