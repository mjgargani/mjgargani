import { FaArchive } from 'react-icons/fa'
import { SiPhp, SiJest } from 'react-icons/si'
import { DiWordpress } from 'react-icons/di'
import { IoLogoNodejs } from 'react-icons/io'
import { RiReactjsLine } from 'react-icons/ri'
import { SiSocketdotio } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { SiStyledcomponents } from 'react-icons/si'
import { GiHeartOrgan } from 'react-icons/gi'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { MdGTranslate } from 'react-icons/md'
import { MdFiberNew } from 'react-icons/md'
import { BsPinFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'

import { type IconList, type IconReplacerProps } from './types'
import { Container } from './styles'
import { testIdName } from '../../../utils/testIdName'

const icons: IconList = {
  new: ['#e6ff82', <MdFiberNew title='Novo!' />],
  pin: ['#FFF', <BsPinFill title='Fixado' />],
  star: ['#e6ff82', <AiFillStar title='Estrelas dadas' />],
  eye: ['#FFF', <AiFillEye title='Observadores(as)' />],
  gtranslate: ['#4B8BF5', <MdGTranslate title='Translate this page!' />],
  github: ['#000', <BsGithub title='GitHub' />],
  archive: ['#575100', <FaArchive title='Arquivo' />],
  linkedin: ['#0A66C2', <FaLinkedin title='LinkedIn' />],
  email: ['#000', <MdEmail title='E-mail' />],
  nodejs: ['#7CB73F', <IoLogoNodejs title='Node.js' />],
  ts: ['#2F74C0', <SiTypescript title='TypeScript' />],
  reactjs: ['#5ED3F3', <RiReactjsLine title='ReactJS' />],
  styledcomponents: ['#EC75C4', <SiStyledcomponents title='styled-components' />],
  jest: ['#C03B18', <SiJest title='Jest' />],
  socketio: ['#000', <SiSocketdotio title='Socket.IO' />],
  php: ['#4D588E', <SiPhp title='PHP' />],
  wp: ['#21759B', <DiWordpress title='WordPress' />],
  heart: ['#F75341', <GiHeartOrgan title='com o coração' />],
}

const IconReplacer: React.FC<IconReplacerProps> = ({
  dataTestId = testIdName('icon-replacer'),
  text,
  darker = false,
  style,
}) => (
  <Container data-testid={dataTestId} darker={darker} style={style}>
    {Object.entries(icons).map((entry, i) => {
      if (text.includes(entry[0])) {
        return (
          <span
            data-testid={testIdName(`icon-${entry[0]}`)}
            style={{
              color: entry[1][0],
              padding: '0 5px',
            }}
            key={i}
          >
            {entry[1][1]}
          </span>
        )
      }

      return false
    })}
  </Container>
)

export default IconReplacer
