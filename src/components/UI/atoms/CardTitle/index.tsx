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
    Object.entries(icons).map(entry => {
      if(text.includes(entry[0])) {
        return (<> {entry[1]} </>); 
      }
      return false
    })
  }
</ IconContainer>

const replaceRegExp = new RegExp(".+(?<=_)", "gi");

const CardTitle: React.FC<PropsWithChildren> = ({
  children
}) => <MainContainer>
  {(children as string).replaceAll(replaceRegExp, "").replaceAll("-"," ")}<br />
  <IconReplacer text={children as string} />
</MainContainer>;

export default CardTitle;