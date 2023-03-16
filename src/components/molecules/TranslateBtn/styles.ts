import styled from 'styled-components'
import { device } from '../../../utils/devices'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  max-width: 1vh;
  @media ${device.tablet} {
    max-width: 1vw;
  }
  margin: 0.1vh 0 0 0.25vw;
  
  a,
  a:hover {
    background-color: unset !important;
  }
  button {
    padding: 0;
    line-height: 0;
    max-height: -1vh;
  }
  h1 {
    font-size: 1vh;
    @media ${device.tablet} {
      font-size: 0.7vw;
    }
    padding: 0;
    margin: 0;
  }
  h1 span {
    margin: 0;
  }
`
