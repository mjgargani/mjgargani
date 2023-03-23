import React, { type PropsWithChildren, useEffect, useState } from 'react'

import potion from '../../../assets/potion.png'
import imgLoader from '../../../utils/imgLoader'
import { testIdName } from '../../../utils/testIdName'
import { Container } from './styles'
import { type PotionProps } from './types'

const Potion: React.FC<PropsWithChildren<PotionProps>> = ({
  dataTestId = testIdName('potion'),
  transparent = true,
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    imgLoader([potion], () => setIsLoaded(true))
  }, [isLoaded])

  return isLoaded ? (
    <Container src={potion} data-testid={dataTestId} transparent={transparent} />
  ) : (
    <></>
  )
}

export default Potion
