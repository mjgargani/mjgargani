import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import App from '../../App';
import { server } from '../mock/server';

beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));

afterEach(() => {
  cleanup();
  server.resetHandlers();
});

afterAll(() => server.close());

test('verify if app rendeer child components correctly depending of the `page` prop', async () => {
  render(<App />);

  const frame = await screen.findByTestId(/^frame_\d/);
  expect(frame).toBeInTheDocument();

  const buttons = await screen.findAllByTestId(/^button_\d+/);
  expect(buttons[0]).toBeInTheDocument();
  expect(buttons[1]).toBeInTheDocument();
  expect(buttons[2]).toBeInTheDocument();

  const pageHome = await screen.findByTestId(/^page-home_\d+/);

  expect(pageHome).toBeInTheDocument();
  expect(buttons[0]).toHaveStyle("color: black");

  expect(pageHome).toHaveTextContent("mjgargani's Lab ");
  
  fireEvent.click(buttons[1]);
  
  await waitFor(() => {
    expect(pageHome).not.toBeInTheDocument();
  });

  const pageRepos = await screen.findByTestId(/^page-repos_\d/);
  expect(pageRepos).toBeInTheDocument();

  const cards = await screen.findAllByTestId(/^card_\d+/);
  expect(cards[0]).toBeInTheDocument();
  expect(cards[1]).toBeInTheDocument();
  expect(cards[2]).toBeInTheDocument();

  fireEvent.click(buttons[2]);
  
  await waitFor(() => {
    expect(pageRepos).not.toBeInTheDocument();
  });

  const pageAbout = await screen.findByTestId(/^page-about_\d/);
  expect(pageAbout).toBeInTheDocument();

  const cardAbout = await screen.findByTestId(/^card-about_\d+/);
  const imgVakinha = await screen.findByTestId(/^img-vakinha_\d+/);
  expect(cardAbout).toBeInTheDocument();
  expect(imgVakinha).toBeInTheDocument();

  fireEvent.click(buttons[0]);

  await waitFor(() => {
    expect(pageAbout).not.toBeInTheDocument();
  });
})