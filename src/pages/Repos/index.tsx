import GridCell from '../../components/atoms/GridCell';
import GridContainer from '../../components/atoms/GridContainer';
import Card from '../../components/molecules/Card';
import Page from '../../components/templates/Page';
import { GitHubDataContext } from '../../context/GitHubData';
import { type GitHubRepoItem } from '../../context/types';
import { type CommonProps } from '../../globals';
import { device, size } from '../../utils/devices';
import imgLoader from '../../utils/imgLoader';
import mdParser from '../../utils/mdParser';
import randomId from '../../utils/randomId';
import React, { useContext, useEffect, useState } from 'react';
import { css } from 'styled-components';

const sortRepos = (a: GitHubRepoItem, b: GitHubRepoItem) => (a.id < b.id ? 1 : -1);

const Repos: React.FC<CommonProps> = ({ dataTestId = randomId('page-repos') }) => {
  const { repos } = useContext(GitHubDataContext);
  const [ordenedRepos, setOrdenedRepos] = useState<GitHubRepoItem[]>([]);

  useEffect(() => {
    if (Boolean(repos?.length) && !ordenedRepos.length) {
      const newOrdenedRepos = [
        ...repos!.filter(el => el.pinned).sort(sortRepos),
        ...repos!.filter(el => !el.pinned).sort(sortRepos),
      ];
      imgLoader(newOrdenedRepos.map((el) => el.thumbnail))
        .then(() => {
          setOrdenedRepos(newOrdenedRepos );
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [repos, ordenedRepos]);

  const RepoItem = (el: GitHubRepoItem | undefined) => (
    <GridCell key={randomId('repo-item', true)}>
      <Card
        bgImg={{
          source: el!.thumbnail,
          new: el!.new,
          pinned: el!.pinned,
          stars: el!.stargazers_count,
          watchers: el!.watchers_count,
        }}
        url={el!.html_url}
        title={el!.name === 'mjgargani' ? 'nodejs-typescript-reactjs-vite-styledcomponents_2023-portfolio' : el!.name}
        homePage={el!.homepage}
      >
        {mdParser(el!.description)}
      </Card>
    </GridCell>
  );

  return (
    <Page>
      <GridContainer
        dataTestId={dataTestId}
        columnGap={3}
        rowGap={3}
        styledCss={css`
          position: absolute;
          height: 100% !important;
          grid-template-columns: repeat(2, 1fr) !important;

          @media ${device.tablet} and (orientation: landscape) {
            @media (min-aspect-ratio: 4/3), (min-aspect-ratio: 16/9), (min-aspect-ratio: 16/10) {
              grid-template-columns: repeat(3, 1fr) !important;
            }
            @media (min-aspect-ratio: 23/9), (min-aspect-ratio: 23/10) {
              grid-template-columns: repeat(4, 1fr) !important;
            }
          }
          @media ${device.tablet} and (orientation: portrait) {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: repeat(3, 1fr) !important;
          }
          @media (max-width: ${size.tablet}px) and (orientation: portrait) {
            grid-template-columns: repeat(1, 1fr) !important;
            grid-template-rows: auto !important;
          }
        `}
      >
        {ordenedRepos?.length
          ? ordenedRepos.map(RepoItem)
          : repos?.length && repos.map((el, i) => <Card key={randomId(`card-item-${i}`, true)} isLoading={true} />)}
      </GridContainer>
    </Page>
  );
};

export default Repos;
