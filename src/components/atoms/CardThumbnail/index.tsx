import React from 'react'
import { testIdName } from '../../../utils/testIdName'
import IconReplacer from '../../molecules/IconReplacer'
import { Container, IsNew, IsPinned, Stars, Watchers } from './styles'
import { type CardThumbnailProps } from './types'

const CardThumbnail: React.FC<CardThumbnailProps> = ({
  dataTestId = testIdName('card-thumb'),
  bgImg,
}) => (<Container data-testid={dataTestId} bgImg={bgImg}>
  <IsNew data-testid={testIdName("card-thumb-is-new")} bgImg={bgImg}><p>{bgImg?.new && <IconReplacer text='new' />}</p></IsNew>
  <IsPinned data-testid={testIdName("card-thumb-is-pinned")} bgImg={bgImg}><p>{bgImg?.pinned && <IconReplacer text='pin' />}</p></IsPinned>
  <Stars data-testid={testIdName("card-thumb-stars")} bgImg={bgImg}>
    <p>
      <IconReplacer text='star' />
      <span data-testid={testIdName("card-thumb-stars-count")} className='card-counter'>{bgImg?.stars! > 999 ? "999+" : bgImg?.stars}</span>
    </p>
  </Stars>
  <Watchers data-testid={testIdName("card-thumb-watchers")} bgImg={bgImg}>
    <p>
      <IconReplacer text='eye' />
      <span data-testid={testIdName("card-thumb-watchers-count")} className='card-counter'>{bgImg?.watchers! > 999 ? "999+" : bgImg?.watchers!}</span>
    </p>
  </Watchers>
</Container>)

export default CardThumbnail
