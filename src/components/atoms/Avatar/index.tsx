import randomId from '../../../utils/randomId';
import { Container } from './styles';
import { type AvatarProps } from './types';
import React, { type PropsWithChildren } from 'react';

const Avatar: React.FC<PropsWithChildren<AvatarProps>> = ({ dataTestId = randomId('avatar'), src, styledCss }) => (
  <Container data-testid={dataTestId} src={src} styledCss={styledCss} />
);

export default Avatar;
