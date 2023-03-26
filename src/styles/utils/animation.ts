import { keyframes } from 'styled-components'

import { Angle, Color } from '../../globals'

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

const bgPosition = (values: number[][]) => keyframes`
  0%{background-position:${values[0][0]}% ${values[0][1]}%}
  50%{background-position:${values[1][0]}% ${values[1][1]}%}
  100%{background-position:${values[2][0]}% ${values[2][1]}%}
`

const bg = {
  color: bgColor,
  position: bgPosition,
}

const rotate = (from: Angle, to: Angle) => keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`

const animation = {
  opacity,
  bg,
  rotate,
}

export default animation
