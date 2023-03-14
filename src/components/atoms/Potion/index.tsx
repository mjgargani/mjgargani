import React, { type PropsWithChildren } from 'react'
import { testIdName } from '../../../utils/testIdName'

import { Container } from './styles'
import { type PotionProps } from './types'

const Potion: React.FC<PropsWithChildren<PotionProps>> = ({
  dataTestId = testIdName('potion'),
  transparent = false,
}) => <Container data-testid={dataTestId} transparent={transparent} />

export default Potion
