import { FaArchive } from "react-icons/fa";
import { SiPhp, SiJest } from "react-icons/si";
import { DiWordpress } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io"
import { RiReactjsLine } from "react-icons/ri"
import { IconReplacerProps } from "./types";
import { Container } from "./styles";

const icons = {
  "archive": <FaArchive />,
  "php": <SiPhp />,
  "wp": <DiWordpress />,
  "nodejs": <IoLogoNodejs />,
  "jest": <SiJest />,
  "reactjs": <RiReactjsLine />
}

const IconReplacer: React.FC<IconReplacerProps> = ({ text }) => <Container>
  {
    Object.entries(icons).map((entry, i) => {
      if(text.includes(entry[0])) {
        return (<span key={i}> {entry[1]} </span>); 
      }
      return false
    })
  }
</ Container>;

export default IconReplacer;