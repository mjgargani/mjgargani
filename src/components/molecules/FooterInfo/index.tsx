import React from 'react'

import { type CommonProps } from '../../../globals'
import randomId from '../../../utils/randomId'
import IconReplacer from '../IconReplacer'
import { Container } from './styles'

const FooterInfo: React.FC<CommonProps> = ({ dataTestId = randomId('footer-info') }) => (
  <Container data-testid={dataTestId}>
    <p>
      <span style={{ fontFamily: 'mjgarganis Lab', color: '#E9E9FC' }}></span>{' '}
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
