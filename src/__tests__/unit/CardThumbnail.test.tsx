import { render, screen, cleanup } from '@testing-library/react';
import CardThumbnail from '../../components/UI/atoms/CardThumbnail';
import repos from '../mock/repos.json';

afterEach(cleanup);

test('verify if component receives the `bgImg` prop correctly', () => {
  const currentDataTestId = "card-thumb__rtl";
  const expectedBgImg = `https://raw.githubusercontent.com/mjgargani/${repos[0].name}/main/thumbnail.gif`;

  render(<CardThumbnail dataTestId={currentDataTestId} bgImg={expectedBgImg} />);

  expect(screen.getByTestId(currentDataTestId)).toBeInTheDocument();
  expect(screen.getByTestId(currentDataTestId))
    .toHaveStyle(`background-image: url(${expectedBgImg})`);
});
