import { type FilterProps } from './types';
import styled from 'styled-components';

export const Container = styled.div<Partial<FilterProps>>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  ${(props) => props.styledCss}
`;

export const FilterBox = styled.div`
  display: flex;
  flex: column;
  gap: 8px;
  background-color: black;
  color: white;
  opacity: 0.8;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`
