type RGB = `rgb(${number} | ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`
export type Color = RGB | RGBA | HEX

export type AlphaRange =  0    | 0.05 | 0.1  | 0.15 | 0.2  |
                          0.25 | 0.3  | 0.35 | 0.4  | 0.45 |
                          0.5  | 0.55 | 0.6  | 0.65 | 0.7  |
                          0.75 | 0.8  | 0.85 | 0.9  | 0.95 |
                          1

export type PageEndPoints = "/" | 
                            "/projects" | 
                            "/about"

export type CommonProps = {
  dataTestId?: string
}
