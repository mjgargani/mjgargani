import React from 'react'
import { CommonProps } from '../../../../fonts'
import { testIdName } from '../../../utils/testIdName'
import IconReplacer from '../IconReplacer'

import { Container } from './styles'

const FooterInfo: React.FC<CommonProps> = ({ dataTestId = testIdName('footer-info') }) => (
  <Container data-testid={dataTestId}>
    <p>
      🄯 <span style={{ fontFamily: 'mjgarganis Lab', color: '#E9E9FC' }}></span>{' '}
      {new Date().getFullYear()}; Este portfólio foi feito com{' '}
      <IconReplacer
        style={{ lineHeight: '80%' }}
        text='nodejs-typescript-reactjs-styledcomponents'
      />{' '}
      e <IconReplacer style={{ lineHeight: '80%' }} text='heart' />
    </p>
  </Container>
)

export default FooterInfo
