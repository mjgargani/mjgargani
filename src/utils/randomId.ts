const randomId = (name: string, production: boolean = false) =>
  production || ['development', 'test'].includes(process.env.NODE_ENV!)
    ? `${name}_${Date.now()}${Math.round(Math.random() * 1000)}`
    : undefined

export default randomId
