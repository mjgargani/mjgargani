import React, { useState } from 'react';
import 'normalize.css';
import Frame from './components/UI/atoms/Frame';
import Potion from './components/UI/atoms/Potion';
import Navigation from './components/UI/molecules/Navigation';
import Home from './pages/Home';
import Repos from './pages/Repos';

function App() {
  const [page, setPage] = useState<number>(0);

  return (
    <Frame onHome={page === 0} page={page}>
      <Potion transparent={page !== 0}/>
      <Home show={page === 0} />
      <Repos show={page === 1} />
      <Navigation setPage={setPage}/>
    </Frame>
  );
}

export default App;
