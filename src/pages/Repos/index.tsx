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
import Filter from '@/components/atoms/Filter';
import { type FilterItem } from '@/components/atoms/Filter/types';
import IconReplacer from '@/components/molecules/IconReplacer';
import React, { useContext, useEffect, useState } from 'react';
import { css } from 'styled-components';

const sortRepos = (a: GitHubRepoItem, b: GitHubRepoItem) => (a.id < b.id ? 1 : -1);

const Repos: React.FC<CommonProps> = ({ dataTestId = randomId('page-repos') }) => {
  const { repos, techs } = useContext(GitHubDataContext);
  const [filteredRepos, setFilteredRepos] = useState<GitHubRepoItem[]>([]);
  const [filters, setFilters] = useState<FilterItem[]>([]);

  useEffect(() => {
    if (techs?.length && !filters.length) {
      setFilters(techs.map((el) => ({ selected: true, ...el })));
    }
  }, [techs]);

  useEffect(() => {
    if (Boolean(repos?.length) && Boolean(filters?.length)) {
      if (filters.some((el) => el.selected) && !filteredRepos.length) {
        const newOrdenedRepos = [
          ...repos!.filter((el) => el.pinned).sort(sortRepos),
          ...repos!.filter((el) => !el.pinned).sort(sortRepos),
        ];

        const newFilteredRepos = newOrdenedRepos.filter((repo) =>
          filters.some((filter) => repo.name.includes(filter.name) && filter.selected),
        );

        imgLoader(newFilteredRepos.map((el) => el.thumbnail))
          .catch((err) => {
            console.error(err);
          })
          .finally(() => {
            setFilteredRepos(newFilteredRepos);
          });
      }

      if (!filters.some((el) => el.selected) && filteredRepos.length) {
        setFilteredRepos([]);
      }
    }
  }, [filters, repos, filteredRepos]);

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
        title={el!.name}
        homePage={el!.homepage}
      >
        {mdParser(el!.description)}
      </Card>
    </GridCell>
  );

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    let newFilter;

    if (target.value === 'all') {
      if (target.checked) {
        newFilter = filters.map((el) => ({ ...el, selected: true }));
      } else {
        newFilter = filters.map((el) => ({ ...el, selected: false }));
      }
    } else {
      newFilter = filters.map((el) => (el.name === target.name ? { ...el, selected: !el.selected } : el));
    }

    setFilters(newFilter);
    setFilteredRepos([]);
  };

  return (
    <Page>
      <Filter 
        repoLength={repos?.length ?? 0} 
        filters={filters} 
        handleFilter={handleFilter} 
      />
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
        {filters.some((el) => el.selected) ? (
          filteredRepos?.length ? (
            filteredRepos.map(RepoItem)
          ) : (
            repos?.length && repos.map((el, i) => <Card key={randomId(`card-item-${i}`, true)} isLoading={true} />)
          )
        ) : (
          <div />
        )}
      </GridContainer>
    </Page>
  );
};

export default Repos;
