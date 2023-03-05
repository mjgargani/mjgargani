import React from "react";
import { Container } from "./styles";
import { CardThumbnailProps } from "./types";

const CardThumbnail: React.FC<CardThumbnailProps> = ({ 
  bgImg = ""
}) => <>
    <Container bgImg={bgImg} />
</>;

export default CardThumbnail;