import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react'
import App from '../../App'
import { server } from '../mock/server'
import profile from '../mock/profile.json'
import repos from '../mock/repos.json'

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'bypass' })
})

afterEach(() => {
  cleanup()
  server.listen({ onUnhandledRequest: 'bypass' })
  server.resetHandlers()
  server.close()
})

afterAll(() => {
  server.close()
})

test('verify if app rendeer child components correctly depending of the `page` prop', async () => {
  render(<App />)

  const frame = await screen.findByTestId(/^frame_\d/)
  expect(frame).toBeInTheDocument()

  const buttons = await screen.findAllByTestId(/^button_\d+/)
  expect(buttons[0]).toBeInTheDocument()
  expect(buttons[1]).toBeInTheDocument()
  expect(buttons[2]).toBeInTheDocument()
  expect(buttons[3]).toBeInTheDocument()

  const pageHome = await screen.findByTestId(/^page-home_\d+/)

  expect(pageHome).toBeInTheDocument()
  expect(buttons[1]).toHaveStyle('color: black')

  expect(pageHome).toHaveTextContent("mjgargani's Lab ")

  fireEvent.click(buttons[2])

  await waitFor(() => {
    expect(pageHome).not.toBeInTheDocument()
  })

  const pageRepos = await screen.findByTestId(/^page-repos_\d/)
  expect(pageRepos).toBeInTheDocument()

  const cards = await screen.findAllByTestId(/^card_\d+/)
  expect(cards[0]).toBeInTheDocument()
  expect(cards[1]).toBeInTheDocument()
  expect(cards[2]).toBeInTheDocument()

  const replaceRegExpTitle = new RegExp('.+(?<=_)', 'gi')

  for (let i = 0; i < repos.length; i++) {
    const cardThumb = await screen.findAllByTestId(/^card-thumb_\d+/)
    const cardTitle = await screen.findAllByTestId(/^card-title_\d+/)
    const cardDesc = await screen.findAllByTestId(/^card-desc_\d+/)
    const cardLink = await screen.findAllByTestId(/^card-link_\d+/)

    expect(cardThumb[i]).toHaveStyle(
      `background-image: url(https://raw.githubusercontent.com/mjgargani/${repos[i].name}/main/thumbnail.gif)`,
    )
    expect(cardTitle[i]).toHaveTextContent(
      repos[i].name.replaceAll(replaceRegExpTitle, '').replaceAll('-', ' '),
    )
    expect(cardDesc[i]).toHaveTextContent(repos[i].description.replaceAll('`', ''))
    expect(cardLink[i]).toHaveAttribute('href', repos[i].html_url)
  }

  fireEvent.click(buttons[3])

  await waitFor(() => {
    expect(pageRepos).not.toBeInTheDocument()
  })

  const pageAbout = await screen.findByTestId(/^page-about_\d/)
  expect(pageAbout).toBeInTheDocument()

  const cardAbout = await screen.findByTestId(/^card-about_\d+/)
  const cardAvatar = await screen.findByTestId(/^card-about-avatar_\d+/)
  const cardAboutBio = await screen.findByTestId(/^card-about-bio_\d+/)
  const cardAboutContacts = await screen.findByTestId(/^card-about-contacts_\d+/)
  const cardAboutDesc = await screen.findByTestId(/^card-about-desc_\d+/)
  const imgQrCodePadrim = await screen.findByTestId(/^img-qr-code-padrim_\d+/)
  expect(cardAbout).toBeInTheDocument()
  expect(cardAvatar).toBeInTheDocument()
  expect(cardAboutBio).toBeInTheDocument()
  expect(cardAboutContacts).toBeInTheDocument()
  expect(cardAboutDesc).toBeInTheDocument()
  expect(imgQrCodePadrim).toBeInTheDocument()

  expect(cardAboutBio).toHaveTextContent(profile.bio!.replaceAll('`', ''))

  fireEvent.click(buttons[1])

  await waitFor(() => {
    expect(pageAbout).not.toBeInTheDocument()
  })
})
