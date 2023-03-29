import Navigation from '../../components/molecules/Navigation';
import { type PageEndPoints } from '../../globals';
import { render } from '../utils/render';
import { cleanup, screen } from '@testing-library/react';
import { type NavigateFunction } from 'react-router-dom';
import { vi } from 'vitest';

beforeEach(() => {
  vi.mock('react-router-dom', async () => {
    const reactRouterDom = await vi.importActual('react-router-dom');
    const mockedUsedNavigate = vi.fn();
    const useNavigate: NavigateFunction = () => mockedUsedNavigate;

    return {
      ...(reactRouterDom as Record<string, unknown>),
      useNavigate,
    };
  });
});

afterEach(() => {
  cleanup();
  vi.resetAllMocks();
});

test.each([
  ['/', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)'],
  ['/projects', 'rgb(255, 255, 255)', 'rgb(0, 0, 0)', 'rgb(255, 255, 255)'],
  ['/about', 'rgb(255, 255, 255)', 'rgb(255, 255, 255)', 'rgb(0, 0, 0)'],
])('verify if component shows child components correctly (page: %p)', async (page, color1, color2, color3) => {
  const currentPage = page as PageEndPoints;
  const currentDataTestId = 'navigation_rtl';

  render(<Navigation dataTestId={currentDataTestId} page={currentPage} />);

  const navigation = screen.getByTestId(currentDataTestId);
  const buttons = screen.getAllByTestId(/^btn-nav_\d+/);

  expect(navigation).toBeInTheDocument();
  expect(buttons[0]).toBeInTheDocument();
  expect(buttons[1]).toBeInTheDocument();
  expect(buttons[2]).toBeInTheDocument();

  expect(buttons[0]).toHaveTextContent('Início');
  expect(buttons[1]).toHaveTextContent('Projetos');
  expect(buttons[2]).toHaveTextContent('Sobre');

  expect(buttons[0]).toHaveStyle(`color: ${color1}`);
  expect(buttons[1]).toHaveStyle(`color: ${color2}`);
  expect(buttons[2]).toHaveStyle(`color: ${color3}`);
});
