import styled from 'styled-components'

import { device } from '../../../utils/devices'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  max-height: min-content;
  max-width: min-content;

  a,
  a:hover {
    background-color: unset !important;
  }
  button {
    max-height: min-content !important;
    max-width: min-content !important;
  }
  h1 {
    font-size: 1.4vh !important;
    @media ${device.tablet} {
      font-size: 0.7vw !important;
    }
  }
  a,
  button,
  h1,
  span {
    padding: 0 !important;
    margin: 0 !important;
    line-height: 0 !important;
  }
  svg {
    margin: 5px !important;
  }
`
