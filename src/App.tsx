import React, { useState } from 'react';
import 'normalize.css';
import Frame from './components/UI/atoms/Frame';
import Potion from './components/UI/atoms/Potion';
import Home from './pages/Home';
import Navigation from './components/UI/molecules/Navigation';

function App() {
  const [page, setPage] = useState<number>(0);

  return (
    <Frame>
      <Potion transparent={true}/>
      <Home show={page === 0} />
      <Navigation setPage={setPage}/>
    </Frame>
  );
}

export default App;
