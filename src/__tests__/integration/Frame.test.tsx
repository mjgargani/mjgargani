import { render, screen, cleanup } from '@testing-library/react';
import Frame from "../../components/UI/molecules/Frame";

afterEach(cleanup);

test('verify if component shows child components correctly', () => {
  const currentDataTestId = "frame_rtl";

  render(<Frame
      dataTestId={currentDataTestId}
      page={0}
    />);

  const frame = screen.getByTestId(currentDataTestId);
  const tiles = screen.getByTestId(/^frame-tiles_\d+/);
  const shadow = screen.getByTestId(/^frame-shadow_\d+/);
  const potion = screen.getByTestId(/^potion_\d+/);
  const footerInfo = screen.getByTestId(/^footer-info_\d+/);

  expect(frame).toBeInTheDocument();
  expect(tiles).toBeInTheDocument();
  expect(shadow).toBeInTheDocument();
  expect(potion).toBeInTheDocument();
  expect(footerInfo).toBeInTheDocument();
});

test('verify if components changes when the `page` prop changes', () => {
  const currentDataTestId = "frame_rtl";

  render(<Frame
      dataTestId={currentDataTestId}
      page={1}
    />);

  const frame = screen.getByTestId(currentDataTestId);
  expect(frame).toBeInTheDocument();

  const shadow = screen.getByTestId(/^frame-shadow_\d+/);
  const potion = screen.getByTestId(/^potion_\d+/);

  expect(shadow).toHaveStyle(`opacity: 0.9`);
  expect(potion).toHaveStyle(`opacity: 0.1`);
});
