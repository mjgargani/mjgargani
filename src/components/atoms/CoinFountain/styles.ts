import styled, { keyframes } from 'styled-components';
import { CoinFountainProps } from './types';

const coinYMovement = (distance: number) => keyframes`
  from{
    bottom: 2%;
  }
  to{
    bottom: ${distance}%;
  }
`

const coinXMovement = (distance: number) => keyframes`
  from{
    left: 1%;
    transform: rotate(0);
    opacity: 1;
  }
  to{
    left: ${distance}%;
    transform: rotate(360deg);
    opacity: 0;
  }
`

const coinOpacity = keyframes`
  0%{
    opacity: 1;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`

const moneyBagShake = keyframes`
  from{
    transform: rotate(30deg);
  }
  to{
    transform: rotate(20deg);
  }
`

export const Coin = styled.div<CoinFountainProps>`
  position: absolute;
  bottom: 2%;
  left: 1%;
  animation-delay: ${props=> props.delay || 0}ms !important;
  animation:  ${props => coinYMovement(props.distance ? props.distance![1] : 10)} .25s alternate ease infinite,
              ${props => coinXMovement(props.distance ? props.distance![0] : 10)} 1s ease infinite,
              ${coinOpacity} 1s ease infinite;
`;

export const MoneyBag = styled.div`
  position: absolute;
  bottom: -3%;
  left: -2%;
  font-size: 300%;
  animation: ${moneyBagShake} .15s alternate ease-in-out infinite;
`

export const Container = styled.div`
  position: absolute;
  z-index: 0;
  width: 100%;
  left: 0;
  height: 100%;
  pointer-events: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
