import React, { type PropsWithChildren } from 'react'

import randomId from '../../../utils/randomId'
import { Container } from './styles'
import { type AvatarProps } from './types'

const Avatar: React.FC<PropsWithChildren<AvatarProps>> = ({
  dataTestId = randomId('avatar'),
  src,
}) => <Container data-testid={dataTestId} src={src} />

export default Avatar
