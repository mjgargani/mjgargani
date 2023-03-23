type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`
export type Color = RGB | RGBA | HEX

export type PageEndPoints = "/" | 
                            "/projects" | 
                            "/about"

export type CommonProps = {
  dataTestId?: string
}
