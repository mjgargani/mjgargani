import React, { type PropsWithChildren } from 'react'

import { Container, ContainerBottom, ContainerTop } from './styles'
import { type CardProps } from './types'
import CardDescription from '../../atoms/CardDescription'
import CardTitle from '../CardTitle'
import CardThumbnail from '../../atoms/CardThumbnail'
import { testIdName } from '../../../utils/testIdName'

const Card: React.FC<PropsWithChildren<CardProps>> = ({
  dataTestId = testIdName('card'),
  bgImg,
  url,
  title = '',
  content = 0,
  style,
  children,
}) => {
  const cardContent: JSX.Element = (
    <>
      <ContainerTop bgImg={bgImg}>
        <CardThumbnail bgImg={bgImg} />
      </ContainerTop>
      <ContainerBottom bgImg={bgImg}>
        <CardTitle bgImg={bgImg}>{title}</CardTitle>
        <CardDescription bgImg={bgImg}>{children}</CardDescription>
      </ContainerBottom>
    </>
  )

  return (
    <Container 
      data-testid={dataTestId} 
      content={content} 
      style={style}
    >
      {url ? (
        <a
          data-testid={testIdName('card-link')}
          className='card-link'
          href={url}
          target='_blank'
          style={{
            color: 'black',
            textDecoration: 'none',
          }} rel="noreferrer"
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </Container>
  )
}

export default Card
