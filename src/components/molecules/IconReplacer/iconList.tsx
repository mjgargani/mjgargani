import { type IconList } from './types';
import randomId from '@/utils/randomId';
import { AiFillStar, AiFillEye } from 'react-icons/ai';
import { BsGithub, BsPinFill, BsGlobe } from 'react-icons/bs';
import { DiWordpress } from 'react-icons/di';
import { FaArchive, FaLinkedin } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa6';
import { GiHeartOrgan, GiRocketThruster } from 'react-icons/gi';
import { IoLogoNodejs } from 'react-icons/io';
import {
  MdEmail,
  MdGTranslate,
  MdFiberNew,
  MdOutlineAirlineSeatReclineExtra,
  MdOutlineLibraryAddCheck,
} from 'react-icons/md';
import { RiReactjsLine, RiExternalLinkLine } from 'react-icons/ri';
import {
  SiJest,
  SiPhp,
  SiSocketdotio,
  SiTypescript,
  SiStyledcomponents,
  SiVite,
  SiPython,
  SiDjango,
  SiPreact,
  SiTailwindcss,
  SiJavascript,
  SiDocker,
  SiElixir,
  SiVitest,
  SiPuppeteer,
  SiGithubactions,
  SiConstruct3,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export const iconList: IconList = {
  all: ['#ffffff', <MdOutlineLibraryAddCheck key={randomId('Todos', true)} title="Todos" />],
  archive: ['#575100', <FaArchive key={randomId('Arquivo', true)} title="Arquivo" />],
  construct: ['#96aab9', <SiConstruct3 key={randomId('Construct', true)} title="Construct" />],
  django: ['#000', <SiDjango key={randomId('Django', true)} title="Django" />],
  docker: ['#0997e5', <SiDocker key={randomId('Docker', true)} title="Docker" />],
  email: ['#000', <MdEmail key={randomId('E-mail', true)} title="E-mail" />],
  elixir: ['#70557d', <SiElixir key={randomId('E-mail', true)} title="E-mail" />],
  extlink: ['#FFF', <RiExternalLinkLine key={randomId('Atalho para HomePage', true)} title="Atalho para HomePage" />],
  express: ['#237400', <TbApi key={randomId('Express.js REST API', true)} title="Express.js REST API" />],
  eye: ['#FFF', <AiFillEye key={randomId('Observadores(as)', true)} title="Observadores(as)" />],
  github: ['#000', <BsGithub key={randomId('GitHub', true)} title="GitHub" />],
  ghactions: ['#505050', <SiGithubactions key={randomId('GitHub Actions', true)} title="GitHub Actions" />],
  globe: ['#FFF', <BsGlobe key={randomId('Atalho para HomePage', true)} title="Atalho para HomePage" />],
  gtranslate: ['#4B8BF5', <MdGTranslate key={randomId('Translate this page!', true)} title="Translate this page!" />],
  heart: ['#F75341', <GiHeartOrgan key={randomId('com o coração', true)} title="com o coração" />],
  javascript: ['#2F74C0', <SiJavascript key={randomId('JavaScript', true)} title="JavaScript" />],
  jest: ['#C03B18', <SiJest key={randomId('Jest', true)} title="Jest" />],
  lrn: ['#48c018', <FaBookOpen key={randomId('Projeto de aprendizagem', true)} title="Projeto de aprendizagem" />],
  linkedin: ['#0A66C2', <FaLinkedin key={randomId('LinkedIn', true)} title="LinkedIn" />],
  new: ['#e6ff82', <MdFiberNew key={randomId('Novo!', true)} title="Novo!" />],
  nodejs: ['#7CB73F', <IoLogoNodejs key={randomId('Node.js', true)} title="Node.js" />],
  php: ['#4D588E', <SiPhp key={randomId('PHP', true)} title="PHP" />],
  pin: ['#FFF', <BsPinFill key={randomId('Fixado', true)} title="Fixado" />],
  preact: ['#673AB8', <SiPreact key={randomId('Preact', true)} title="Preact" />],
  python: ['#EEC855', <SiPython key={randomId('Python', true)} title="Python" />],
  puppeteer: ['#00d7a1', <SiPuppeteer key={randomId('Puppeteer', true)} title="Puppeteer" />],
  reactjs: ['#5ED3F3', <RiReactjsLine key={randomId('ReactJS', true)} title="ReactJS" />],
  rocketseat: [
    '#8257e6',
    <span title="Rocketseat" key={randomId('ReactJS', true)}>
      <GiRocketThruster style={{ transform: 'rotate(45deg)' }} />
      <MdOutlineAirlineSeatReclineExtra />
    </span>,
  ],
  socketio: ['#505050', <SiSocketdotio key={randomId('Socket.IO', true)} title="Socket.IO" />],
  star: ['#e6ff82', <AiFillStar key={randomId('Estrelas dadas', true)} title="Estrelas dadas" />],
  styledcomp: ['#EC75C4', <SiStyledcomponents key={randomId('styled-components', true)} title="styled-components" />],
  tailwind: ['#38BDF8', <SiTailwindcss key={randomId('Tailwind CSS', true)} title="Tailwind CSS" />],
  typescript: ['#2F74C0', <SiTypescript key={randomId('TypeScript', true)} title="TypeScript" />],
  vite: ['#754afb', <SiVite key={randomId('Vite', true)} title="Vite" />],
  vitest: ['#729b1b', <SiVitest key={randomId('Vitest', true)} title="Vitest" />],
  wordpress: ['#21759B', <DiWordpress key={randomId('WordPress', true)} title="WordPress" />],
};
