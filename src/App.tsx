import { useEffect, useState } from 'react'
import 'normalize.css'
import usePrevious from './hooks/usePrevious'
import Frame from './components/molecules/Frame'
import { GitHubDataContext, useGitHubDataValues } from './context/GitHubData'
import Home from './pages/Home'
import Repos from './pages/Repos'
import About from './pages/About'
import Navigation from './components/molecules/Navigation'
import FooterInfo from './components/molecules/FooterInfo'
import { ContainerBase, ContainerFooter, ContainerNavigation, ContainerPage, ContainerTop } from './styles'
import TranslateBtn from './components/molecules/TranslateBtn'
import GitHubButtons from './components/molecules/GitHubButtons'

function App() {
  const [page, setPage] = useState<number>(0)
  const prevPage = usePrevious<number>(page)
  const gitHubDataValues = useGitHubDataValues()

  useEffect(() => {
    if (!gitHubDataValues?.repos?.length) {
      gitHubDataValues?.fetch()
    }
  }, [gitHubDataValues])

  return (
    <>
      <Frame page={page} prevPage={prevPage} />
      <ContainerBase>
        <ContainerTop>
          <TranslateBtn />
          <GitHubButtons />
        </ContainerTop>
        <ContainerPage>
          <Home show={page === 0} />
          <GitHubDataContext.Provider value={gitHubDataValues}>
            <Repos show={page === 1} />
            <About show={page === 2} />
          </GitHubDataContext.Provider>
        </ContainerPage>
        <ContainerNavigation>
          <Navigation isHome={page === 0} page={page} setPage={setPage} />
        </ContainerNavigation>
        <ContainerFooter>
          <FooterInfo />
        </ContainerFooter>
      </ContainerBase>
    </>
  )
}

export default App
