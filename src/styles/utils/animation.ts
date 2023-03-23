import { keyframes } from "styled-components"
import { Color } from "../../globals"

const opacity = (from: number, to: number) => keyframes`
  from{
    opacity: ${from};
  }
  to{
    opacity: ${to};
  }
`

const bgColor = (from: Color, to: Color) => keyframes`
  from { 
    background-color: ${from};
  }
  to {
    background-color: ${to};
  }
`

const bgPosition = keyframes`
  0%{background-position:5% 0%}
  50%{background-position:96% 100%}
  100%{background-position:5% 0%}
`

const bg = {
  color: bgColor,
  position: bgPosition
}

const animation = {
  opacity,
  bg
}

export default animation