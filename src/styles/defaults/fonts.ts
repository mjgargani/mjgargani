import { createGlobalStyle } from 'styled-components'

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

  h2 {
    font-family: "Sono", sans-serif;
    font-size: 1em;
  }

  p, li {
    text-align: justify;

    line-height: 150%;
  }
`

export default FontStyles
