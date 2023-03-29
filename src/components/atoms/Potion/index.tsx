import potion from '../../../assets/potion.png';
import imgLoader from '../../../utils/imgLoader';
import randomId from '../../../utils/randomId';
import { Container } from './styles';
import { type PotionProps } from './types';
import React, { type PropsWithChildren, useEffect, useState } from 'react';

const Potion: React.FC<PropsWithChildren<Partial<PotionProps>>> = ({
  dataTestId = randomId('potion'),
  transparent,
  styledCss,
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoaded) {
      imgLoader([potion])
        .then(() => {
          setIsLoaded(true);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [isLoaded]);

  return isLoaded ? (
    <Container src={potion} data-testid={dataTestId} transparent={transparent!} styledCss={styledCss} />
  ) : (
    <></>
  );
};

export default Potion;
