import React from 'react'
import Button from '../../atoms/Button'
import IconReplacer from '../IconReplacer'

import { Container } from './styles'

const TranslateBtn: React.FC = () => {
  return (
    <Container>
      <a
        href='https://gargani-dev.translate.goog/?_x_tr_sl=pt&_x_tr_tl=en&_x_tr_hl=pt-BR&_x_tr_pto=wapp'
        target='_self'
        rel='noreferrer'
      >
        <Button icon={<IconReplacer text='gtranslate' />} onClick={() => true} />
      </a>
    </Container>
  )
}

export default TranslateBtn