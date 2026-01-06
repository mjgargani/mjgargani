import randomId from '../../../utils/randomId';
import Button from '../Button';
import Icon from '../Icon';
import { type FilterProps } from './types';
import React, { useState, type PropsWithChildren } from 'react';

const Filter: React.FC<PropsWithChildren<FilterProps>> = ({
  dataTestId = randomId('filter'),
  repoLength,
  filteredLength,
  filters,
  handleFilter,
}) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  return (
    <div data-testid={dataTestId} className='container flex flex-col md:flex-row'>
      <div className='item flex-1 mb-2 mr-2'>
        <Button
          onClick={() => {
            setShowFilter(!showFilter);
          }}
          active={showFilter}
        >
          {showFilter ? 'Ocultar' : 'Filtrar'}{' '}
          <span>
            ({showFilter ? <Icon i={"eye"} /> : <Icon i={"eye2"} />} {filteredLength})
          </span>
        </Button>
      </div>
      <div className="item container flex gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" hidden={!showFilter}>
        <input
          data-testid={randomId('filter_check_all')}
          type="checkbox"
          id="all"
          name="all"
          value="all"
          onChange={handleFilter}
          checked={!filters.some((el) => !el.selected)}
        />
        <label htmlFor="all" data-testid={randomId(`filter_label_all`)}>
          <Icon i={"all"} /> TODOS ({repoLength})
        </label>
      </div>
      <div className="item container flex gap-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer" hidden={!showFilter}>
        {filters?.map((el) => (
          <>
            <input
              data-testid={randomId(`filter_check_${el.name}`)}
              type="checkbox"
              id={el.name}
              name={el.name}
              value={el.name}
              checked={el.selected}
              onChange={handleFilter}
            />
            <label
              htmlFor={el.name}
              data-testid={randomId(`filter_label_${el.name}`)}
            >
              <Icon i={el.name}/> {el.name.replace('archive', 'ARQUIVO').replace('lrn', 'APRENDIZAGEM').toUpperCase()} ({el.recurrence})
            </label>
          </>
        ))}
      </div>
    </div>
  );
};

export default Filter;
