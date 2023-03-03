import React, { PropsWithChildren } from "react";
import { FaArchive } from "react-icons/fa";
import { SiPhp, SiJest } from "react-icons/si";
import { DiWordpress } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io"
import { RiReactjsLine } from "react-icons/ri"

import { MainContainer, IconContainer } from "./styles";
import { CardTitleProps } from "./types";

const icons = {
  "archive": <FaArchive />,
  "php": <SiPhp />,
  "wp": <DiWordpress />,
  "nodejs": <IoLogoNodejs />,
  "jest": <SiJest />,
  "reactjs": <RiReactjsLine />
}

const IconReplacer: React.FC<CardTitleProps> = ({ text }) => <IconContainer>
  {
    Object.entries(icons).map((entry, i) => {
      if(text.includes(entry[0])) {
        return (<span key={i}> {entry[1]} </span>); 
      }
      return false
    })
  }
</ IconContainer>

const replaceRegExp = new RegExp(".+(?<=_)", "gi");

const CardTitle: React.FC<PropsWithChildren> = ({
  children
}) => <>
  <MainContainer>
    {(children as string).replaceAll(replaceRegExp, "").replaceAll("-"," ")}
  </MainContainer>
  <IconReplacer text={children as string} />
</>;

export default CardTitle;