import { render, screen, cleanup } from '@testing-library/react';
import Navigation from "../../components/UI/molecules/Navigation";

afterEach(cleanup);

test.each([
  [0, "black", "white", "white"],
  [1, "white", "black", "white"],
  [2, "white", "white", "black"],
])('verify if component shows child components correctly (page: %p)', 
(page, color1, color2, color3) => {
  const currentDataTestId = "navigation_rtl";
  const setPage = () => {};

  render(<Navigation
      dataTestId={currentDataTestId}
      page={page}
      setPage={setPage as React.Dispatch<React.SetStateAction<number>>}
    />);

  const navigation = screen.getByTestId(currentDataTestId);
  const buttons = screen.getAllByTestId(/^button_\d+/);

  expect(navigation).toBeInTheDocument();
  expect(buttons[0]).toBeInTheDocument();
  expect(buttons[1]).toBeInTheDocument();
  expect(buttons[2]).toBeInTheDocument();

  expect(buttons[0]).toHaveTextContent(" início");
  expect(buttons[1]).toHaveTextContent(" projetos");
  expect(buttons[2]).toHaveTextContent(" sobre");

  expect(buttons[0]).toHaveStyle(`color: ${color1}`);
  expect(buttons[1]).toHaveStyle(`color: ${color2}`);
  expect(buttons[2]).toHaveStyle(`color: ${color3}`);
});
