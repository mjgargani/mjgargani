import Icon from '@/components/atoms/Icon';
import Card from '../../components/molecules/Card';
import { GitHubDataContext } from '../../context/GitHubData';
import { type GitHubRepoItem } from '../../context/types';
import { type CommonProps } from '../../globals';
import imgLoader from '../../utils/imgLoader';
import randomId from '../../utils/randomId';
import Filter from '@/components/atoms/Filter';
import { type FilterItem } from '@/components/atoms/Filter/types';
import useQuery from '@/hooks/useQuery';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const sortRepos = (a: GitHubRepoItem, b: GitHubRepoItem) => (a.id < b.id ? 1 : -1); // Newer repos first

const Repos: React.FC<CommonProps> = ({ dataTestId = randomId('page-repos') }) => {
  const { repos, techs } = useContext(GitHubDataContext);
  const [filteredRepos, setFilteredRepos] = useState<GitHubRepoItem[]>([]);
  const [filters, setFilters] = useState<FilterItem[]>([]);

  const query = useQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (techs?.length && !filters.length) {
      const queryFilters = query.get('f')?.split('&') || [];
      
      if (queryFilters.length) {
        setFilters(
          techs.map((tech) => ({
            ...tech,
            selected: queryFilters.includes(tech.name),
          })),
        );
      } else {
        setFilters(techs.map((tech) => ({ ...tech, selected: true })));
      }
    }
  }, [techs, filters.length, query]);

  useEffect(() => {
    const hasRepos = !!repos?.length;
    const hasFilters = !!filters?.length;
    const hasSelection = filters.some((f) => f.selected);

    if (!hasRepos || !hasFilters) return;

    if (!hasSelection && filteredRepos.length) {
      setFilteredRepos([]);
      return;
    }

    if (hasSelection && !filteredRepos.length) {
      const sortedRepos = [
        ...repos!.filter((r) => r.metaData!.pinned).sort(sortRepos),
        ...repos!.filter((r) => !r.metaData!.pinned).sort(sortRepos),
      ];

      const filtered = sortedRepos.filter((repo) =>
        filters.some((filter) => 
          repo.metaData?.stack?.includes(filter.name) && filter.selected
        ),
      );

      imgLoader(filtered.map((r) => r.metaData?.gallery?.[0] || "thumbnail.webp"))
        .catch((err) => console.error('Failed to preload images:', err))
        .finally(() => setFilteredRepos(filtered));
    }
  }, [filters, repos, filteredRepos.length]);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    let updatedFilters: FilterItem[];

    if (target.value === 'all') {
      updatedFilters = filters.map((f) => ({ 
        ...f, 
        selected: target.checked 
      }));
      navigate(''); // Clear query params
    } else {
      updatedFilters = filters.map((f) =>
        f.name === target.name ? { ...f, selected: !f.selected } : f,
      );
      
      const selectedTechs = updatedFilters
        .filter((f) => f.selected)
        .map((f) => f.name)
        .join('-');
      
      navigate(selectedTechs ? `?f=${selectedTechs}` : '');
    }

    setFilters(updatedFilters);
    setFilteredRepos([]); // Trigger re-filtering
  };

  return (
    <div data-testid={dataTestId} className='min-h-full flex flex-col'>
      <Filter
        repoLength={repos?.length ?? 0}
        filteredLength={filteredRepos.length}
        filters={filters}
        handleFilter={handleFilter}
      />
      <div className='flex flex-wrap flex-1 justify-center gap-4'>
        {filters.some((f) => f.selected) ? (
          filteredRepos?.length ? (
            filteredRepos.map((el, i) => (<Card key={`card_${i}`} repo={el} />))
          ) : (
            <span className='m-4'><Icon i={"loading"} /></span>
          )
        ) : (
          <span />
        )}
      </div>
    </div>
  );
};

export default Repos;
