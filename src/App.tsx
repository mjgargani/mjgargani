import 'normalize.css'
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import FooterInfo from './components/molecules/FooterInfo'
import Frame from './components/molecules/Frame'
import GitHubButtons from './components/molecules/GitHubButtons'
import Navigation from './components/molecules/Navigation'
import TranslateBtn from './components/molecules/TranslateBtn'
import { GitHubDataContext, useGitHubDataValues } from './context/GitHubData'
import usePrevious from './hooks/usePrevious'
import About from './pages/About'
import Home from './pages/Home'
import Repos from './pages/Repos'
import {
  ContainerBase,
  ContainerFooter,
  ContainerNavigation,
  ContainerPage,
  ContainerTop,
} from './styles'

function App() {
  const { pathname } = useLocation()
  const currentPage = pathname === '/' ? 0 : pathname === '/projects' ? 1 : 2
  const [page, setPage] = useState<number>(currentPage)
  const prevPage = usePrevious<number>(page)
  const appData = useGitHubDataValues()

  useEffect(() => {
    page !== currentPage && setPage(currentPage)
  }, [page, currentPage])

  return (
    <>
      <Frame page={page} prevPage={prevPage} />
      <ContainerBase isLoading={!!appData.loading}>
        <ContainerTop>
          <TranslateBtn />
          <GitHubButtons />
        </ContainerTop>
        <GitHubDataContext.Provider value={appData}>
          <ContainerPage>
            <Routes>
              <Route path='/' element={<Home show={page === 0} />} />
              <Route path='/projects' element={<Repos show={page === 1} />} />
              <Route path='/about' element={<About show={page === 2} />} />
              <Route path='/*' element={<Navigate to='/' replace />} />
            </Routes>
          </ContainerPage>
          <ContainerNavigation>
            <Navigation isHome={page === 0} page={page} />
          </ContainerNavigation>
        </GitHubDataContext.Provider>
        <ContainerFooter>
          <FooterInfo />
        </ContainerFooter>
      </ContainerBase>
    </>
  )
}

export default App
