import { createGlobalStyle } from 'styled-components'
import { device, size } from '../../utils/devices'

const FontStyles = createGlobalStyle`
  a{
    font-weight: bold;
    font-family: "Sono", sans-serif;
  }
  a:not(.card-link){
    color: rgb(62, 71, 247, .7);
    text-decoration: none;
    padding: 0 .25%;
    border-radius: .25vw;
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
    font-family: "mjgarganis Lab";
  }

  h2, p {
    font-family: "Sono", sans-serif;

    font-size: 1.1em;
    background-color: mediumvioletred;
    @media  (orientation: landscape) {
      @media  (min-aspect-ratio: 4/3){
        font-size: 1.3em;
        background-color: red;
      }
      @media  (min-aspect-ratio: 16/9), (min-aspect-ratio: 16/10){
        font-size: 1.15em;
        background-color: indianred;
      }
      @media  (min-aspect-ratio: 23/9) {
        font-size: 1em;
        background-color: salmon;
      }
    }
    @media  ${device.tablet} and (orientation: portrait) {
      @media  (max-aspect-ratio: 3/4){
        font-size: 1.3em;
        background-color: blue;
      }
      @media  (max-aspect-ratio: 9/16), (max-aspect-ratio: 10/16){
        font-size: 1.1em;
        background-color: deepskyblue;
      }
      @media  (max-aspect-ratio: 9/23) {
        font-size: .75em;
        background-color: powderblue;
      }
    }
    @media  (max-width: ${size.tablet}px) and (orientation: portrait) {
      @media  (max-aspect-ratio: 3/4){
        font-size: 1.4em;
        background-color: green;
      }
      @media  (max-aspect-ratio: 9/16), (max-aspect-ratio: 10/16){
        font-size: 1.3em;
        background-color: lightgreen;
      }
      @media  (max-aspect-ratio: 9/23) {
        font-size: 1.2em;
        background-color: greenyellow;
      }
    }
  }

  p, li {
    font-family: sans-serif;
    text-align: justify;
    line-height: 150%;
  }

  p {
    font-size: 90%;
  }

  li {
    font-size: 120%;
  }
`

export default FontStyles
