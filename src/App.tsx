import React, { useEffect, useState } from 'react';
import 'normalize.css';
import Frame from './components/UI/atoms/Frame';
import Navigation from './components/UI/molecules/Navigation';
import { GitHubDataContext, useGitHubDataValues } from './context/GitHubData';
import Home from './pages/Home';
import Repos from './pages/Repos';
import About from './pages/About';
import usePrevious from './hooks/usePrevious';

function App() {
  const [page, setPage] = useState<number>(0);
  const prevPage = usePrevious(page);
  const gitHubDataValues = useGitHubDataValues();

  useEffect(() => {
    if(!!!gitHubDataValues?.repos?.length){
      gitHubDataValues?.fetch();
    }
  }, [gitHubDataValues])

  return (
    <Frame page={page} prevPage={prevPage}>
      <Home show={page === 0} />
      <GitHubDataContext.Provider value={gitHubDataValues}>
        <Repos show={page === 1} />
        <About show={page === 2} />
      </GitHubDataContext.Provider>
      <Navigation page={page} setPage={setPage}/>
    </Frame>
  );
}

export default App;
