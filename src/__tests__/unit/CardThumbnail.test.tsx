import CardThumbnail from '../../components/atoms/CardThumbnail';
import { type GitHubRepoItem } from '../../context/types';
import repos from '../mock/repos.json';
import { render } from '../utils/render';
import { cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

test.each([
  [10, 20],
  [1000, 2000],
])('verify if component receives the `bgImg` prop correctly (stars: %p; watchers: %p)', (stars, watchers) => {
  const currentDataTestId = 'card-thumb__rtl';
  const repoItem = repos[0] as Partial<GitHubRepoItem>;
  const expectedBgImg = `https://raw.githubusercontent.com/mjgargani/${repoItem.name!}/main/thumbnail.webp`;

  render(
    <CardThumbnail
      dataTestId={currentDataTestId}
      bgImg={{
        source: expectedBgImg,
        new: true,
        pinned: true,
        stars,
        watchers,
      }}
    />,
  );

  const cardThumb = screen.getByTestId(currentDataTestId);
  const cardThumbNew = screen.getByTestId(/^card-thumb-is-new_\d+/);
  const cardThumbPinned = screen.getByTestId(/^card-thumb-is-pinned_\d+/);
  const cardThumbStars = screen.getByTestId(/^card-thumb-stars_\d+/);
  const cardThumbStarsCount = screen.getByTestId(/^card-thumb-stars_\d+/);
  const cardThumbWatchers = screen.getByTestId(/^card-thumb-watchers_\d+/);
  const cardThumbWatchersCount = screen.getByTestId(/^card-thumb-watchers_\d+/);

  expect(cardThumb).toBeInTheDocument();
  expect(cardThumb).toHaveStyle(`background-image: url(${expectedBgImg})`);
  expect(cardThumbNew).toBeInTheDocument();
  expect(cardThumbPinned).toBeInTheDocument();
  expect(cardThumbStars).toBeInTheDocument();
  expect(cardThumbStarsCount).toHaveTextContent(stars < 1000 ? stars.toString() : '999+');
  expect(cardThumbWatchers).toBeInTheDocument();
  expect(cardThumbWatchersCount).toHaveTextContent(watchers < 1000 ? watchers.toString() : '999+');
});
