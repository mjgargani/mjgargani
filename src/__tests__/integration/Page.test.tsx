import Page from '../../components/templates/Page';
import { render } from '../utils/render';
import { cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

test('verify if component shows children correctly', () => {
  const currentDataTestId = 'page_rtl';
  const expected = 'conteúdo';

  render(<Page dataTestId={currentDataTestId}>{expected}</Page>);

  const page = screen.getByTestId(currentDataTestId);
  expect(page).toBeInTheDocument();

  expect(page).toHaveTextContent(expected);
});
