export const testIdName = (name: string) =>
  ['development', 'test'].includes(process.env.NODE_ENV!)
    ? `${name}_${Date.now()}${Math.round(Math.random() * 1000)}`
    : undefined
