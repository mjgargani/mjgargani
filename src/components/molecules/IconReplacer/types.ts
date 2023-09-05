import { type Color, type CommonProps } from '../../../globals';
import type React from 'react';

export type IconReplacerProps = {
  text: string;
  color?: Color;
  brighter?: boolean;
  darker?: boolean;
  style?: React.CSSProperties;
} & CommonProps;

export type IconList = Record<string, [color: Color, icon: JSX.Element]>;
