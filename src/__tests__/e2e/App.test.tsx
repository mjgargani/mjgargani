import App from '../../App';
import localStorageMock from '../mock/localStorage';
import profile from '../mock/profile.json';
import repos from '../mock/repos.json';
import { server } from '../mock/server';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

afterEach(() => {
  cleanup();
});

test.each([200, 304, 403])(
  'verify if app rendeer child components correctly depending of the `page` prop (apiStatusCode: %p)',
  async (apiStatusCode) => {
    const status = apiStatusCode as 200 | 304 | 403;
    server(status).listen();
    server(status).resetHandlers();

    render(<App />, { wrapper: BrowserRouter });

    const spyLoSet = vi.spyOn(localStorage, 'setItem');
    const spyLoGet = vi.spyOn(localStorage, 'getItem');

    const translateBtn = await screen.findByTestId(/^translate-btn_\d/);
    const ghBtns = await screen.findByTestId(/^github-btns_\d/);
    const footerInfo = screen.getByTestId(/^footer-info_\d+/);

    expect(translateBtn).toBeInTheDocument();
    expect(ghBtns).toBeInTheDocument();
    expect(footerInfo).toBeInTheDocument();

    const frame = await screen.findByTestId(/^frame_\d/);
    expect(frame).toBeInTheDocument();

    const buttonsNav = await screen.findAllByTestId(/^btn-nav_\d+/);
    expect(buttonsNav[0]).toBeInTheDocument();
    expect(buttonsNav[1]).toBeInTheDocument();
    expect(buttonsNav[2]).toBeInTheDocument();

    const pageHome = await screen.findByTestId(/^page-home_\d+/);

    expect(pageHome).toBeInTheDocument();

    expect(pageHome).toHaveTextContent("mjgargani's Lab ");

    expect(spyLoSet).toHaveBeenCalled();
    expect(spyLoSet).toHaveBeenCalledTimes(10);
    expect(spyLoGet).toHaveBeenCalled();
    expect(spyLoGet).toHaveBeenCalledTimes(6);

    fireEvent.click(buttonsNav[1]);

    await waitFor(() => {
      expect(pageHome).not.toBeInTheDocument();
    });

    const pageRepos = await screen.findByTestId(/^page-repos_\d/);
    expect(pageRepos).toBeInTheDocument();

    const cards = await screen.findAllByTestId(/^card_\d+/);
    expect(cards[0]).toBeInTheDocument();
    expect(cards[1]).toBeInTheDocument();
    expect(cards[2]).toBeInTheDocument();
    expect(cards[3]).toBeInTheDocument();

    const replaceRegExpTitle = /.+(?<=_)/gi;

    const cardThumb = await screen.findAllByTestId(/^card-thumb_\d+/);
    const cardTitle = await screen.findAllByTestId(/^card-title_\d+/);
    const cardDesc = await screen.findAllByTestId(/^card-desc_\d+/);
    const cardLink = await screen.findAllByTestId(/^card-link_\d+/);

    for (let i = 1; i < repos.length; i++) {
      expect(cardThumb[i]).toHaveStyle(
        `background-image: url(https://raw.githubusercontent.com/mjgargani/${repos[i].name}/main/thumbnail.webp)`,
      );
      expect(cardTitle[i]).toHaveTextContent(repos[i].name.replaceAll(replaceRegExpTitle, '').replaceAll('-', ' '));
      expect(cardDesc[i]).toHaveTextContent(repos[i].description.replaceAll('`', ''));
      expect(cardLink[i]).toHaveAttribute('href', repos[i].html_url);
    }

    fireEvent.click(buttonsNav[2]);

    await waitFor(() => {
      expect(pageRepos).not.toBeInTheDocument();
    });

    const pageAbout = await screen.findByTestId(/^page-about_\d/);
    expect(pageAbout).toBeInTheDocument();

    const cardAbout = await screen.findByTestId(/^card-about_\d+/);
    const cardAvatar = await screen.findByTestId(/^card-about-avatar_\d+/);
    const cardAboutBio = await screen.findByTestId(/^card-about-bio_\d+/);
    const cardAboutContacts = await screen.findByTestId(/^card-about-contacts_\d+/);
    const cardAboutDesc = await screen.findByTestId(/^card-about-desc_\d+/);
    const imgQrCodePadrim = await screen.findByTestId(/^img-qr-code-padrim_\d+/);
    expect(cardAbout).toBeInTheDocument();
    expect(cardAvatar).toBeInTheDocument();
    expect(cardAboutBio).toBeInTheDocument();
    expect(cardAboutContacts).toBeInTheDocument();
    expect(cardAboutDesc).toBeInTheDocument();
    expect(imgQrCodePadrim).toBeInTheDocument();

    expect(cardAboutBio).toHaveTextContent(profile.bio.replaceAll('`', ''));

    fireEvent.click(buttonsNav[0]);

    await waitFor(() => {
      expect(pageAbout).not.toBeInTheDocument();
    });

    server(status).close();
  },
);
