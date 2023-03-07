import { FaArchive } from "react-icons/fa";
import { SiPhp, SiJest } from "react-icons/si";
import { DiWordpress } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { SiSocketdotio } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { GiHeartOrgan } from "react-icons/gi";

import { IconList, IconReplacerProps } from "./types";
import { Container } from "./styles";

const icons: IconList = {
  "archive": ["#575100", <FaArchive title="Arquivo" />],
  "nodejs": ["#7CB73F", <IoLogoNodejs title="Node.js" />],
  "ts": ["#2F74C0", <SiTypescript title="TypeScript" />],
  "reactjs": ["#5ED3F3", <RiReactjsLine title="ReactJS" />],
  "styledcomponents": ["#EC75C4", <SiStyledcomponents title="styled-components" />],
  "jest": ["#C03B18", <SiJest title="Jest" />],
  "socketio": ["#000", <SiSocketdotio title="Socket.IO" />],
  "php": ["#4D588E", <SiPhp title="PHP" />],
  "wp": ["#21759B", <DiWordpress title="WordPress" />],
  "heart": ["#F75341", <GiHeartOrgan title="com o coração" />]
}

const IconReplacer: React.FC<IconReplacerProps> = ({ 
  text, darker = false, style
}) => <Container darker={darker} style={style}>
  {
    Object.entries(icons).map((entry, i) => {
      if(text.includes(entry[0])) {
        return (<span style={{ 
          color: entry[1][0],
          padding: "0 5px"
        }} key={i}>{entry[1][1]}</span>);
      }
      return false
    })
  }
</ Container>;

export default IconReplacer;