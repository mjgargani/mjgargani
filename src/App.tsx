import { useEffect, useState } from 'react';
import 'normalize.css';
import usePrevious from './hooks/usePrevious';
import Frame from './components/UI/molecules/Frame';
import { GitHubDataContext, useGitHubDataValues } from './context/GitHubData';
import Home from './pages/Home';
import Repos from './pages/Repos';
import About from './pages/About';
import Navigation from './components/UI/molecules/Navigation';

function App() {
  const [page, setPage] = useState<number>(0);
  const prevPage = usePrevious(page);
  const gitHubDataValues = useGitHubDataValues();

  useEffect(() => {
    if(!!!gitHubDataValues?.repos?.length){
      gitHubDataValues?.fetch();
    }
  }, [gitHubDataValues])

  return (<>
    <Frame page={page} prevPage={prevPage} />
    <Home show={page === 0} />
    <GitHubDataContext.Provider value={gitHubDataValues}>
      <Repos show={page === 1} />
      <About show={page === 2} />
    </GitHubDataContext.Provider>
    <Navigation page={page} setPage={setPage}/>
  </>
  );
}

export default App;
