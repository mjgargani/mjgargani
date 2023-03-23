import React, { useContext } from 'react'

import { GitHubDataContext } from '../../../context/GitHubData'
import { testIdName } from '../../../utils/testIdName'
import Potion from '../../atoms/Potion'
import { Container, Shadow, Tiles } from './styles'
import { type FrameProps } from './types'

const Frame: React.FC<FrameProps> = ({
  dataTestId = testIdName('frame'),
  style,
  page,
  prevPage,
}) => {
  const { loading } = useContext(GitHubDataContext)
  return (
    <Container data-testid={dataTestId} style={style} page={page}>
      <Tiles data-testid={testIdName('frame-tiles')} />
      <Shadow data-testid={testIdName('frame-shadow')} page={page} prevPage={prevPage || '/'} />
      <Potion data-testid={testIdName('frame-potion')} transparent={loading || page !== '/'} />
    </Container>
  )
}

export default Frame
