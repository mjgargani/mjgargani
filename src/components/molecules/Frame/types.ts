import { type CommonProps, type PageEndPoints } from '../../../globals';

export type FrameProps = {
  page: PageEndPoints;
  prevPage?: PageEndPoints;
  bgMov?: number[][];
} & CommonProps;
