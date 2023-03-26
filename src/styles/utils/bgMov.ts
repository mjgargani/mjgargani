import { Angle } from '../../globals'

const bgMov = (deg: Angle = 135): number[][] => {
  const secs = [
    [315, 45],
    [45, 135],
    [135, 225],
    [225, 315],
  ]

  const topA = deg > secs[0][0] && deg < secs[0][0] + 45
  const topB = deg >= 0 && deg <= secs[0][1]
  const top = topA || topB
  const right = deg > secs[1][0] && deg <= secs[1][1]
  const bottom = deg > secs[2][0] && deg <= secs[2][1]
  const left = deg > secs[3][0] && deg <= secs[3][1]

  const threeRule = (deg: Angle, invert: boolean = false) => {
    const baseSec1 = topA ? deg - secs[0][0] : topB && deg + secs[0][1]
    const baseSec2 = right && deg - secs[1][0]
    const baseSec3 = bottom && deg - secs[2][0]
    const baseSec4 = left && deg - secs[3][0]

    const rule = Math.trunc(((baseSec1 || baseSec2 || baseSec3 || baseSec4 || 0) * 100) / 90)

    const result = rule === 0 ? 1 : rule === 100 ? 99 : rule

    return !invert ? result : 100 - result
  }

  const condition = (axis: 'x' | 'y' = 'x', fixed: 0 | 100 = 0, invert: boolean = false) =>
    (axis === 'y' ? top || bottom : left || right) ? fixed : threeRule(deg, invert)

  const values = [
    [condition(), condition('y', 0, true)],
    [condition('x', 100, true), condition('y', 100)],
    [condition(), condition('y', 0, true)],
  ]

  return values
}

export default bgMov
