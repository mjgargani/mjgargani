import { Color } from "../../globals"

export type ButtonDefaults = {
  margin: number
  color: {
    active: {
      text: [Color, Color],
      bg: [Color, Color, Color]
    }
  }
}

const defaults: ButtonDefaults = {
  margin: 10,
  color: {
    active: {
      text: ["#000","#FFF"],
      bg: [
        "rgba(255, 255, 255, 0.7)", 
        "rgba(255, 255, 255, 0.1)",
        "rgba(255, 255, 255, 0.25)", //hover
      ]
    }
  }
}

export default defaults