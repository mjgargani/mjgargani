import React, { type PropsWithChildren } from 'react'

import { Container, ContainerBottom, ContainerTop, InnerContent } from './styles'
import { type CardProps } from './types'
import CardDescription from '../../atoms/CardDescription'
import CardTitle from '../CardTitle'
import CardThumbnail from '../../atoms/CardThumbnail'
import { testIdName } from '../../../utils/testIdName'
import Loading from '../../atoms/Loading'

const Card: React.FC<PropsWithChildren<CardProps>> = ({
  dataTestId = testIdName('card'),
  bgImg,
  url,
  title = '',
  isContent = false,
  isLoading = false,
  style,
  children,
}) => {
  const cardContent = (isLoading: boolean) => (
    <InnerContent>
      {isLoading && <Loading isCard={true} />}
      <ContainerTop bgImg={bgImg}>
        <CardThumbnail bgImg={bgImg} />
      </ContainerTop>
      <ContainerBottom bgImg={bgImg}>
        <CardTitle isContent={isContent} bgImg={bgImg?.source}>
          {title}
        </CardTitle>
        <CardDescription isContent={isContent} bgImg={bgImg?.source}>
          {children}
        </CardDescription>
      </ContainerBottom>
    </InnerContent>
  )

  return (
    <Container data-testid={dataTestId} isContent={isContent} isLoading={isLoading} style={style}>
      {url ? (
        <a
          data-testid={testIdName('card-link')}
          className='card-link'
          href={url}
          target='_blank'
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
          rel='noreferrer'
        >
          {cardContent(isLoading)}
        </a>
      ) : (
        cardContent(isLoading)
      )}
    </Container>
  )
}

export default Card
