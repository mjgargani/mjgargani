import React, { useState } from 'react';
import 'normalize.css';
import Frame from './components/UI/atoms/Frame';
import Potion from './components/UI/atoms/Potion';
import Navigation from './components/UI/molecules/Navigation';
import Home from './pages/Home';
import Repos from './pages/Repos';
import usePrevious from './hooks/usePrevious';
import About from './pages/About';

function App() {
  const [page, setPage] = useState<number>(0);
  const prevPage = usePrevious(page);

  return (
    <Frame page={page} prevPage={prevPage}>
      <Potion transparent={page !== 0}/>
      <Home show={page === 0} />
      <Repos show={page === 1} />
      <About show={page === 2} />
      <Navigation setPage={setPage}/>
    </Frame>
  );
}

export default App;
