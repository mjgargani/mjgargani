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
import {
  ContainerBase,
  ContainerFooter,
  ContainerNavigation,
  ContainerPage,
  ContainerTop,
} from './styles'
import TranslateBtn from './components/molecules/TranslateBtn'
import GitHubButtons from './components/molecules/GitHubButtons'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

function App() {
  const { pathname } = useLocation()
  const currentPage = pathname === '/' ? 0 : pathname === '/projects' ? 1 : 2
  const [page, setPage] = useState<number>(currentPage)
  const prevPage = usePrevious<number>(page)
  const gitHubDataValues = useGitHubDataValues()

  useEffect(() => {
    if (!gitHubDataValues?.repos?.length) {
      gitHubDataValues?.fetch()
    }
  }, [gitHubDataValues])

  useEffect(() => {
    page !== currentPage && setPage(currentPage)
  }, [page, currentPage])

  return (
    <>
      <Frame page={page} prevPage={prevPage} />
      <ContainerBase isLoading={!!gitHubDataValues.loading}>
        <ContainerTop>
          <TranslateBtn />
          <GitHubButtons />
        </ContainerTop>
        <GitHubDataContext.Provider value={gitHubDataValues}>
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
