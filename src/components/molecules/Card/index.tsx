import randomId from '../../../utils/randomId';
import CardDescription from '../../atoms/CardDescription';
import CardThumbnail from '../../atoms/CardThumbnail';
import Loading from '../../atoms/Loading';
import CardTitle from '../CardTitle';
import { Container, ContainerBottom, ContainerTop, InnerContent } from './styles';
import { type CardProps } from './types';
import React, { type PropsWithChildren } from 'react';

const Card: React.FC<PropsWithChildren<CardProps>> = ({
  dataTestId = randomId('card'),
  bgImg,
  homePage,
  url,
  title = '',
  isContent = false,
  isLoading = false,
  styledCss,
  children,
}) => {
  const cardContent = (isLoading: boolean) => (
    <InnerContent>
      {isLoading && <Loading isCard={true} />}
      {!isContent && bgImg && (
        <ContainerTop bgImg={bgImg}>
          <CardThumbnail bgImg={bgImg} homePage={homePage} />
        </ContainerTop>
      )}
      <ContainerBottom bgImg={bgImg}>
        <CardTitle isContent={isContent} bgImg={bgImg?.source}>
          {title}
        </CardTitle>
        <CardDescription isContent={isContent} bgImg={bgImg?.source}>
          {children}
        </CardDescription>
      </ContainerBottom>
    </InnerContent>
  );

  return (
    <Container data-testid={dataTestId} isContent={isContent} isLoading={isLoading} styledCss={styledCss}>
      {url ? (
        <a
          data-testid={randomId('card-link')}
          className="card-link"
          href={url}
          target="_blank"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
          rel="noreferrer"
        >
          {cardContent(isLoading)}
        </a>
      ) : (
        cardContent(isLoading)
      )}
    </Container>
  );
};

export default Card;
