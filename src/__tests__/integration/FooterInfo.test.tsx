import { render, screen, cleanup } from '@testing-library/react';
import FooterInfo from '../../components/UI/molecules/FooterInfo';

afterEach(cleanup);

test('verify if component returns the content correctly', () => {
  const currentDataTestId = "footer-info_rtl";

  render(<FooterInfo dataTestId={currentDataTestId} />);

  const footerInfo = screen.getByTestId(currentDataTestId);
  const iconReplacer = screen.getAllByTestId(/^icon-replacer_\d+/);
  const nodeIcon = screen.getByTestId(/^icon-nodejs_\d+/);
  const tsIcon = screen.getByTestId(/^icon-ts_\d+/);
  const reactIcon = screen.getByTestId(/^icon-reactjs_\d+/);
  const scIcon = screen.getByTestId(/^icon-styledcomponents_\d+/);
  const heartIcon = screen.getByTestId(/^icon-heart_\d+/);

  expect(footerInfo).toBeInTheDocument();
  expect(iconReplacer[0]).toBeInTheDocument();
  expect(iconReplacer[1]).toBeInTheDocument();
  expect(nodeIcon).toBeInTheDocument();
  expect(tsIcon).toBeInTheDocument();
  expect(reactIcon).toBeInTheDocument();
  expect(scIcon).toBeInTheDocument();
  expect(heartIcon).toBeInTheDocument();

  expect(footerInfo).toHaveTextContent(`🄯  ${new Date().getFullYear()}; Este portfólio foi feito com`);
});
