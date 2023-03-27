import { createGlobalStyle } from 'styled-components'

import { device, size } from '../../utils/devices'
import commonStyles from './common'

const FontStyles = createGlobalStyle`
  a{
    font-weight: bold;
    font-family: "Sono", sans-serif;
  }
  a:not(.card-link){
    color: rgb(62, 71, 247, .7);
    text-decoration: none;
    padding: 0 .25%;
    border-radius: ${commonStyles.border.radius};
  }
  a:not(.card-link):hover{
    color: #FFF;
    background-color: rgb(62, 71, 247, .5);
  }

  code {
    font-weight: bold;
    color: #0f9125;
    padding: 0 .25%;
  }

  li:not(:last-child){
    margin-bottom: 1.5vh;
  }
  
  h1 {
    font-family: "mjgarganis Lab" !important;
    /* font-size: 100%; */
  }

  h1,h2, p {
    font-family: "Sono", sans-serif;

    font-size: calc(1em + .7vw);
    @media  (orientation: landscape) {
      @media  (min-aspect-ratio: 4/3){
        font-size: 1.3em;
      }
      @media  (min-aspect-ratio: 16/9), (min-aspect-ratio: 16/10){
        font-size: 1.15em;
      }
      @media  (min-aspect-ratio: 23/9) {
        font-size: 1em;
      }
    }
    @media  ${device.tablet} and (orientation: portrait) {
      @media  (max-aspect-ratio: 3/4){
        font-size: 1.3em;
      }
      @media  (max-aspect-ratio: 9/16), (max-aspect-ratio: 10/16){
        font-size: 1.1em;
      }
      @media  (max-aspect-ratio: 9/23) {
        font-size: .75em;
      }
    }
    @media  (max-width: ${size.tablet}px) and (orientation: portrait) {
      @media  (max-aspect-ratio: 3/4){
        font-size: 1.8em;
      }
      @media  (max-aspect-ratio: 9/16), (max-aspect-ratio: 10/16){
        font-size: 1.6em;
      }
      @media  (max-aspect-ratio: 9/23) {
        font-size: 1.4em;
      }
    }
  }

  p, li {
    font-family: sans-serif;
    text-align: justify;
    line-height: 150%;
    font-size: 150%;
    @media  ${device.tablet} {
      font-size: 110%;
    }
  }
`

export default FontStyles
