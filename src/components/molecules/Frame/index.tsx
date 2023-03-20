import React, { useContext } from 'react'
import Potion from '../../atoms/Potion'
import { Tiles, Shadow, Container } from './styles'
import { type FrameProps } from './types'
import { testIdName } from '../../../utils/testIdName'
import { GitHubDataContext } from '../../../context/GitHubData'

const Frame: React.FC<FrameProps> = ({
  dataTestId = testIdName('frame'),
  style,
  page,
  prevPage = 0,
}) => {
  const { loading } = useContext(GitHubDataContext);
  return (
    <Container data-testid={dataTestId} style={style} page={page}>
      <Tiles data-testid={testIdName('frame-tiles')} />
      <Shadow data-testid={testIdName('frame-shadow')} page={page} prevPage={prevPage} />
      <Potion data-testid={testIdName('frame-potion')} transparent={loading || page !== 0} />
    </Container>
  )
}

export default Frame
