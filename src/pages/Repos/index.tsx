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
import useQuery from '@/hooks/useQuery';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from 'styled-components';

const sortRepos = (a: GitHubRepoItem, b: GitHubRepoItem) => (a.id < b.id ? 1 : -1); // Newer repos first

const Repos: React.FC<CommonProps> = ({ dataTestId = randomId('page-repos') }) => {
  const { repos, techs } = useContext(GitHubDataContext);
  const [filteredRepos, setFilteredRepos] = useState<GitHubRepoItem[]>([]);
  const [filters, setFilters] = useState<FilterItem[]>([]);

  const query = useQuery();
  const navigate = useNavigate();

  /**
   * Initialize filters from URL query params or select all by default
   * Query format: ?f=tech1&tech2&tech3
   */
  useEffect(() => {
    if (techs?.length && !filters.length) {
      const queryFilters = query.get('f')?.split('&') || [];
      
      if (queryFilters.length) {
        // Restore filter state from URL
        setFilters(
          techs.map((tech) => ({
            ...tech,
            selected: queryFilters.includes(tech.name),
          })),
        );
      } else {
        // Select all filters by default
        setFilters(techs.map((tech) => ({ ...tech, selected: true })));
      }
    }
  }, [techs, filters.length, query]);

  useEffect(() => {
    const hasRepos = !!repos?.length;
    const hasFilters = !!filters?.length;
    const hasSelection = filters.some((f) => f.selected);

    if (!hasRepos || !hasFilters) return;

    // Clear filtered repos if no filters selected
    if (!hasSelection && filteredRepos.length) {
      setFilteredRepos([]);
      return;
    }

    // Apply filters if selection changed
    if (hasSelection && !filteredRepos.length) {
      // Sort: pinned first, then by ID
      const sortedRepos = [
        ...repos!.filter((r) => r.metaData!.pinned).sort(sortRepos),
        ...repos!.filter((r) => !r.metaData!.pinned).sort(sortRepos),
      ];


      // Filter by selected technologies
      // const filtered = sortedRepos.filter((repo) =>
      //   filters.some((filter) => 
      //     repo.name.includes(filter.name) && filter.selected
      //   ),
      // );

      console.log({ sortedRepos })

      // Preload thumbnails before displaying
      imgLoader(sortedRepos.map((r) => r.metaData!.gallery[0]!))
        .catch((err) => console.error('Failed to preload images:', err))
        .finally(() => setFilteredRepos(sortedRepos));
    }
  }, [filters, repos, filteredRepos.length]);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    let updatedFilters: FilterItem[];

    if (target.value === 'all') {
      // Toggle all filters
      updatedFilters = filters.map((f) => ({ 
        ...f, 
        selected: target.checked 
      }));
      navigate(''); // Clear query params
    } else {
      // Toggle individual filter
      updatedFilters = filters.map((f) =>
        f.name === target.name ? { ...f, selected: !f.selected } : f,
      );
      
      // Build query string from selected filters
      const selectedTechs = updatedFilters
        .filter((f) => f.selected)
        .map((f) => f.name)
        .join('-');
      
      navigate(selectedTechs ? `?f=${selectedTechs}` : '');
    }

    setFilters(updatedFilters);
    setFilteredRepos([]); // Trigger re-filtering
  };

  /**
   * Render a single repository card
   */
  const RepoItem = (repo: GitHubRepoItem) => (
    <GridCell key={randomId('repo-item', true)}>
      <Card
        bgImg={{
          source: repo.metaData!.gallery[0]!,
          new: repo.metaData!.new,
          pinned: repo.metaData!.pinned,
          stars: repo.stargazers_count,
          watchers: repo.watchers_count,
        }}
        url={repo.html_url + '#readme'}
        title={repo.name}
        homePage={repo.homepage}
      >
        {mdParser(repo.description)}
      </Card>
    </GridCell>
  );

  /**
   * Render loading skeleton cards
   */
  const LoadingCards = () => (
    <>
      {repos?.map((_, i) => (
        <Card key={randomId(`card-item-${i}`, true)} isLoading={true} />
      ))}
    </>
  );

  return (
    <Page>
      <Filter
        repoLength={repos?.length ?? 0}
        filteredLength={filteredRepos.length}
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

          /* Landscape tablets: 3-4 columns based on aspect ratio */
          @media ${device.tablet} and (orientation: landscape) {
            @media (min-aspect-ratio: 4/3), (min-aspect-ratio: 16/9), (min-aspect-ratio: 16/10) {
              grid-template-columns: repeat(3, 1fr) !important;
            }
            @media (min-aspect-ratio: 23/9), (min-aspect-ratio: 23/10) {
              grid-template-columns: repeat(4, 1fr) !important;
            }
          }
          
          /* Portrait tablets: 2 columns, 3 rows */
          @media ${device.tablet} and (orientation: portrait) {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: repeat(3, 1fr) !important;
          }
          
          /* Mobile portrait: single column */
          @media (max-width: ${size.tablet}px) and (orientation: portrait) {
            grid-template-columns: repeat(1, 1fr) !important;
            grid-template-rows: auto !important;
          }
        `}
      >
        {filters.some((f) => f.selected) ? (
          filteredRepos?.length ? (
            filteredRepos.map(RepoItem)
          ) : (
            <LoadingCards />
          )
        ) : (
          // Empty placeholder when no filters selected (maintains grid layout)
          <span />
        )}
      </GridContainer>
    </Page>
  );
};

export default Repos;
