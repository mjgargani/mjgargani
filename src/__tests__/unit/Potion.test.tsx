import { render, screen, cleanup } from '@testing-library/react';
import Potion from '../../components/UI/atoms/Potion';
import { transparencyAlpha } from '../../components/UI/atoms/Potion/styles';

afterEach(cleanup);

test('verify if component receives the `transparent` prop correctly', () => {
  const currentDataTestId = "potion__rtl";

  render(<Potion dataTestId={currentDataTestId} transparent={true} />);

  expect(screen.getByTestId(currentDataTestId)).toBeInTheDocument();
  expect(screen.getByTestId(currentDataTestId))
    .toHaveStyle(`opacity: ${transparencyAlpha[0]}`);
});
