export const testIdName = (name: string) =>
  process.env.NODE_ENV === 'development'
    ? `${name}_${Date.now()}${Math.round(Math.random() * 1000)}`
    : undefined
