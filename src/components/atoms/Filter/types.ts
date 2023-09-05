import { type CommonProps } from '../../../globals';

export type FilterItem = {
  selected: boolean,
  name: string,
  recurrence: number
}

export type FilterProps = {
  filters: FilterItem[];
  handleFilter: (event: React.MouseEvent<HTMLInputElement>) => void
} & CommonProps;
