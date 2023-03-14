export const testIdName = (name: string) =>
  `${name}_${Date.now()}${Math.round(Math.random() * 1000)}`
