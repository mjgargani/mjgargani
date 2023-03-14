import React, { type PropsWithChildren } from 'react'
import { testIdName } from '../../../utils/testIdName'

import { Container } from './styles'
import { type AvatarProps } from './types'

const Avatar: React.FC<PropsWithChildren<AvatarProps>> = ({
  dataTestId = testIdName('avatar'),
  src,
}) => <Container data-testid={dataTestId} src={src} />

export default Avatar
