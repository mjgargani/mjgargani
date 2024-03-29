import { type CommonProps } from '../../../globals';
import randomId from '../../../utils/randomId';
import IconReplacer from '../IconReplacer';
import { Container } from './styles';
import React from 'react';
import { css } from 'styled-components';

const FooterInfo: React.FC<CommonProps> = ({ dataTestId = randomId('footer-info'), styledCss }) => (
  <Container data-testid={dataTestId} styledCss={styledCss}>
    <p>
      <span style={{ fontFamily: 'mjgarganis Lab', color: '#E9E9FC' }}></span> {new Date().getFullYear()}; Este
      portfólio foi feito com{' '}
      <IconReplacer
        styledCss={css`
          line-height: 80%;
        `}
        brighter={true}
        text="nodejs-typescript-vite-reactjs-styledcomp"
      />{' '}
      e{' '}
      <IconReplacer
        styledCss={css`
          line-height: 80%;
        `}
        brighter={true}
        text="heart"
      />
    </p>
  </Container>
);

export default FooterInfo;
