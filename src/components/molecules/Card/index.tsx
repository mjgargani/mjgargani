import React, { type PropsWithChildren } from 'react'

import { Container } from './styles'
import { type CardProps } from './types'
import GridContainer from '../../atoms/GridContainer'
import GridCell from '../../atoms/GridCell'
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
    <GridContainer>
      {bgImg && (
        <GridCell>
          <CardThumbnail bgImg={bgImg} />
        </GridCell>
      )}
      <GridCell>
        <CardTitle>{title}</CardTitle>
      </GridCell>
      <GridCell>
        <CardDescription>{children}</CardDescription>
      </GridCell>
    </GridContainer>
  )

  return (
    <Container data-testid={dataTestId} content={content} style={style}>
      {url ? (
        <a
          data-testid={testIdName('card-link')}
          className='card-link'
          href={url}
          target='_blank'
          rel='noreferrer'
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
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
