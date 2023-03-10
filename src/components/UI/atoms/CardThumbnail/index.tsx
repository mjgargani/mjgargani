import React from "react";
import { Container } from "./styles";
import { CardThumbnailProps } from "./types";

const CardThumbnail: React.FC<CardThumbnailProps> = ({ 
  dataTestId = `card-thumb_${Date.now()}`,
  bgImg = ""
}) => <>
    <Container data-testid={dataTestId} bgImg={bgImg} />
</>;

export default CardThumbnail;