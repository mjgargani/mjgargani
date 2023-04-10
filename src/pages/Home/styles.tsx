import { device } from '../../utils/devices';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  overflow: hidden;
  width: inherit;
  bottom: 0;

  font-family: 'mjgarganis Lab', sans-serif;
  text-align: center;
  pointer-events: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height: 180%;

  h1 {
    color: black;
    font-family: 'mjgarganis Lab', sans-serif;
    font-size: calc(2.45vw + 2.45vh);
    font-weight: normal;
  }

  h1 > span {
    color: darkblue;
  }

  -webkit-text-stroke-color: white;
  -webkit-text-stroke-width: 0.5px;
  text-shadow: ${['-0.5px  -0.5px 0 #fff', '0.5px  0.5px 0 #fff', '1px  1px 0 #fff', '1.5px  1.5px 0 #fff'].join(', ')};

  @media ${device.tablet} {
    -webkit-text-stroke-width: 1px;
    text-shadow: ${[
      '-1px -1px 0 #fff',
      '-0.5px -0.5px 0 #fff',
      '1px 1px 0 #fff',
      '1.5px 1.5px 0 #fff',
      '2px 2px 0 #fff',
      '2.5px 2.5px 0 #fff',
      '3px 3px 0 #fff',
    ].join(', ')};
    h1 {
      font-size: 300%;
    }
  }
`;
