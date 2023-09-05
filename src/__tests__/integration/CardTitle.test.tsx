import CardTitle from '../../components/molecules/CardTitle';
import { type GitHubRepoItem } from '../../context/types';
import repos from '../mock/repos.json';
import { render } from '../utils/render';
import { cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

test('verify if component receives `children` correctly', () => {
  const currentDataTestId = 'card-title_rtl';
  const projectName = repos[0].name; // > archive-nodejs-typescript-reactjs-styledcomp_color-diff-test

  render(<CardTitle dataTestId={currentDataTestId}>{projectName}</CardTitle>);

  const cardTitle = screen.getByTestId(currentDataTestId);
  const iconReplacer = screen.getByTestId(/^icon-replacer_\d+/);
  const archiveIcon = screen.getByTestId(/^icon-archive_\d+/);
  const njsIcon = screen.getByTestId(/^icon-nodejs_\d+/);
  const tsIcon = screen.getByTestId(/^icon-typescript_\d+/);
  const rjsIcon = screen.getByTestId(/^icon-reactjs_\d+/);

  expect(cardTitle).toBeInTheDocument();
  expect(iconReplacer).toBeInTheDocument();
  expect(archiveIcon).toBeInTheDocument();
  expect(njsIcon).toBeInTheDocument();
  expect(tsIcon).toBeInTheDocument();
  expect(rjsIcon).toBeInTheDocument();

  expect(cardTitle).toHaveTextContent('color diff test');
});
