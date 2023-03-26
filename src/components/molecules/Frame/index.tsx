import React, { useContext, useEffect, useMemo, useState } from 'react'

import { GitHubDataContext } from '../../../context/GitHubData'
import bgMov from '../../../styles/utils/bgMov'
import randomId from '../../../utils/randomId'
import Potion from '../../atoms/Potion'
import { Container, Shadow, Tiles } from './styles'
import { type FrameProps } from './types'

const Frame: React.FC<FrameProps> = ({
  dataTestId = randomId('frame'),
  styledCss,
  page,
  prevPage,
}) => {
  const [showPotion, setShowPotion] = useState<boolean>(false)
  const { loading } = useContext(GitHubDataContext)
  const calcBgMov = useMemo(bgMov, [])

  useEffect(() => {
    if (!!!loading && !showPotion) {
      const timeout = setTimeout(() => {
        setShowPotion(true)
        clearTimeout(timeout)
      }, 750)
    }
  }, [loading, showPotion])

  return calcBgMov ? (
    <Container data-testid={dataTestId} styledCss={styledCss} page={page} bgMov={calcBgMov}>
      <Tiles data-testid={randomId('frame-tiles')} bgMov={calcBgMov} />
      <Shadow data-testid={randomId('frame-shadow')} page={page} prevPage={prevPage || '/'} />
      {showPotion && <Potion transparent={page !== '/'} />}
    </Container>
  ) : (
    <></>
  )
}

export default Frame
