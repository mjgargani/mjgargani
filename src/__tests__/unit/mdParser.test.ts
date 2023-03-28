import { screen, render, cleanup } from "@testing-library/react"
import mdParser from "../../utils/mdParser"
import repos from "../mock/repos.json"

test('verify if util works correctly', async () => {
  cleanup()
  const resultA = mdParser(repos[0].description) as JSX.Element
  render(resultA)
  expect(screen.getByText(/Portfolio/)).toHaveTextContent('WordPress')

  cleanup()
  const resultB = mdParser(repos[0].description, ["WordPress", "(", ")"]) as JSX.Element
  render(resultB)
  expect(screen.getByText(/Portfolio/)).not.toHaveTextContent('WordPress')

  cleanup()
  const resultC = mdParser("")
  expect(resultC).toBe(false)
})
