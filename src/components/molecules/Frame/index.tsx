import { GitHubDataContext } from '../../../context/GitHubData';
import bgMov from '../../../styles/utils/bgMov';
import randomId from '../../../utils/randomId';
import Potion from '../../atoms/Potion';
import { Container, Shadow, Tiles } from './styles';
import { type FrameProps } from './types';
import React, { useContext, useMemo } from 'react';

const Frame: React.FC<FrameProps> = ({ dataTestId = randomId('frame'), styledCss, page, prevPage = '/' }) => {
  const { loading } = useContext(GitHubDataContext);
  const calcBgMov = useMemo(bgMov, []);

  return (
    <Container data-testid={dataTestId} styledCss={styledCss} page={page} bgMov={calcBgMov}>
      <Tiles data-testid={randomId('frame-tiles')} bgMov={calcBgMov} />
      <Shadow data-testid={randomId('frame-shadow')} page={page} prevPage={prevPage} />
      {!loading && <Potion dataTestId={randomId('frame-potion')} transparent={page !== '/'} />}
    </Container>
  );
};

export default Frame;
