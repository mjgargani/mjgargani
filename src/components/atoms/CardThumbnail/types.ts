import { type CommonProps } from '../../../globals';
import { type BgImg } from '@/components/molecules/Card/types';

export type CardThumbnailProps = {
  homePage?: string;
  bgImg: BgImg;
} & CommonProps;
