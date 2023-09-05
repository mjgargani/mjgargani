import IconReplacer from '@/components/molecules/IconReplacer';
import randomId from '../../../utils/randomId';
import { Container, FilterBox } from './styles';
import { type FilterProps } from './types';
import React, { useState, type PropsWithChildren } from 'react';
import Button from '../Button';
import { BsFilter } from 'react-icons/bs';

const Filter: React.FC<PropsWithChildren<FilterProps>> = ({ dataTestId = randomId('filter'), filters, handleFilter, styledCss }) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  return (
    <Container data-testid={dataTestId} styledCss={styledCss}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        maxHeight: showFilter ? "none" : 0,
        overflow: "hidden"
      }}>
        <FilterBox>
          <input 
            type="checkbox" 
            id="all" 
            name="all" 
            value="all" 
            onClick={handleFilter} 
            style={{cursor: "pointer"}}
            checked={!filters.some(el => !el.selected)}
          />
          <label htmlFor="all" style={{cursor: "pointer"}}>TODOS</label>
        </FilterBox>
        {filters?.map(el => (
          <FilterBox key={el.name}>
            <input type="checkbox" id={el.name} name={el.name} value={el.name} checked={el.selected} onClick={handleFilter} style={{cursor: "pointer"}}/>
            <label htmlFor={el.name} style={{cursor: "pointer"}}><IconReplacer text={el.name} />{el.name.toUpperCase()} ({el.recurrence})</label>
          </FilterBox>
        ))}
      </div>
      <div style={{ 
        padding: "0 25%", 
        height: 35,
        fontSize: "80%" 
      }}>
        <Button 
          icon={showFilter ? "" : <BsFilter />} 
          onClick={() => { setShowFilter(!showFilter); }}
          active={showFilter}
        >
          {showFilter ? 'Ocultar' : 'Filtrar'}
        </Button>
      </div>
    </Container>
  )
};

export default Filter;
