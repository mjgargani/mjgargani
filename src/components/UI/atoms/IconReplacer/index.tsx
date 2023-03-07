import { FaArchive } from "react-icons/fa";
import { SiPhp, SiJest } from "react-icons/si";
import { DiWordpress } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { SiSocketdotio } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IconList, IconReplacerProps } from "./types";
import { Container } from "./styles";

const icons: IconList = {
  "archive": ["#575100", <FaArchive title="Arquivo" />],
  "php": ["#4D588E", <SiPhp title="PHP" />],
  "wp": ["#21759B", <DiWordpress title="WordPress" />],
  "nodejs": ["#7CB73F", <IoLogoNodejs title="Node.js" />],
  "jest": ["#C03B18", <SiJest title="Jest" />],
  "reactjs": ["#5ED3F3", <RiReactjsLine title="ReactJS" />],
  "socketio": ["#000", <SiSocketdotio title="Socket.IO" />],
  "ts": ["#2F74C0", <SiTypescript title="TypeScript" />]
}

const IconReplacer: React.FC<IconReplacerProps> = ({ 
  text, darker = false
}) => <Container darker={darker}>
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