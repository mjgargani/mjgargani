import potion from '../../../assets/potion.webp';
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
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoaded(true);
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
