import React, { type PropsWithChildren, useEffect, useState } from 'react'

import potion from '../../../assets/potion.png'
import imgLoader from '../../../utils/imgLoader'
import randomId from '../../../utils/randomId'
import { Container } from './styles'
import { type PotionProps } from './types'

const Potion: React.FC<PropsWithChildren<PotionProps>> = ({
  dataTestId = randomId('potion'),
  transparent = true,
  styledCss,
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (!isLoaded) {
      imgLoader([potion], () => setIsLoaded(true))
    }
  }, [isLoaded])

  return isLoaded ? (
    <Container
      src={potion}
      data-testid={dataTestId}
      transparent={transparent}
      styledCss={styledCss}
    />
  ) : (
    <></>
  )
}

export default Potion
