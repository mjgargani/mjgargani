import { Coin, Container, MoneyBag } from './styles';
import React from 'react';

const CoinFountain: React.FC = () => (
  <Container>
    <Coin>🪙</Coin>
    <Coin delay={200} distance={[15, 10]}>
      🪙
    </Coin>
    <Coin delay={400} distance={[25, 30]}>
      🪙
    </Coin>
    <Coin delay={600} distance={[8, 15]}>
      🪙
    </Coin>
    <Coin delay={800} distance={[12, 8]}>
      🪙
    </Coin>
    <Coin delay={1000} distance={[20, 30]}>
      🪙
    </Coin>
    <Coin delay={1200} distance={[30, 20]}>
      🪙
    </Coin>
    <Coin delay={1400} distance={[18, 15]}>
      🪙
    </Coin>
    <Coin delay={1600} distance={[20, 10]}>
      🪙
    </Coin>
    <Coin delay={1800} distance={[27, 27]}>
      🪙
    </Coin>
    <MoneyBag>💰</MoneyBag>
  </Container>
);

export default CoinFountain;
