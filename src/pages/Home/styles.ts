import styled from 'styled-components'

import { device } from '../../utils/devices'

const fontSizeBase = 6

export const Container = styled.div`
  position: absolute;
  width: inherit;
  bottom: 0;

  font-family: 'mjgarganis Lab', sans-serif;
  text-align: center;
  pointer-events: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height: 180%;

  color: black !important;
  font-weight: bold !important;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white !important;
  text-shadow: ${[
    '-1px  -1px 0 #fff',
    '-0.5px  -0.5px 0 #fff',
    '1px  1px 0 #fff',
    '1.5px  1.5px 0 #fff',
    '2px  2px 0 #fff',
    '2.5px  2.5px 0 #fff',
    '3px  3px 0 #fff',
  ].join(', ')};

  span {
    font-family: 'mjgarganis Lab', sans-serif;
  }
`
