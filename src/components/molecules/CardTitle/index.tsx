import React, { type PropsWithChildren } from 'react'
import { type CommonProps } from '../../../globals'
import { testIdName } from '../../../utils/testIdName'
import IconReplacer from '../IconReplacer'

import { Container } from './styles'

const replaceRegExpTitle = new RegExp('.+(?<=_)', 'gi')
const replaceRegExpIcons = new RegExp('(?=_).+', 'gi')

const CardTitle: React.FC<PropsWithChildren<CommonProps>> = ({
  dataTestId = testIdName('card-title'),
  children,
}) => (
  <>
    <Container data-testid={dataTestId}>
      {(children as string).replaceAll(replaceRegExpTitle, '').replaceAll('-', ' ')}
      <br />
      <IconReplacer text={(children as string).replaceAll(replaceRegExpIcons, '')} darker={true} />
    </Container>
  </>
)

export default CardTitle
