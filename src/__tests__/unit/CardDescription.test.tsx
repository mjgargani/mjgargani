import CardDescription from '../../components/atoms/CardDescription';
import { render } from '../utils/render';
import { cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

test('verify if component receives the `children` correctly', () => {
  const currentDataTestId = 'card-desc__rtl';
  const expectedText = 'Teste com RTL';

  render(<CardDescription dataTestId={currentDataTestId}>{expectedText}</CardDescription>);

  const cardDesc = screen.getByTestId(currentDataTestId);

  expect(cardDesc).toBeInTheDocument();
  expect(cardDesc).toHaveTextContent(expectedText);
});
