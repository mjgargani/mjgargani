import React, { useEffect, useState, type PropsWithChildren } from 'react'
import { testIdName } from '../../../utils/testIdName'
import { Container } from './styles'
import { type PotionProps } from './types'
import potion from '../../../assets/potion.png'
import imgLoader from '../../../utils/imgLoader'

const Potion: React.FC<PropsWithChildren<PotionProps>> = ({
  dataTestId = testIdName('potion'),
  transparent = false,
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
