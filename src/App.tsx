import 'normalize.css'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import FooterInfo from './components/molecules/FooterInfo'
import Frame from './components/molecules/Frame'
import GitHubButtons from './components/molecules/GitHubButtons'
import Navigation from './components/molecules/Navigation'
import TranslateBtn from './components/molecules/TranslateBtn'
import { GitHubDataContext, useGitHubDataValues } from './context/GitHubData'
import { type PageEndPoints } from './globals'
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
  const page = pathname as PageEndPoints
  const prevPage = usePrevious<PageEndPoints>(page)
  const appData = useGitHubDataValues()

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
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<Repos />} />
              <Route path='/about' element={<About />} />
              <Route path='/*' element={<Navigate to='/' replace />} />
            </Routes>
          </ContainerPage>
          <ContainerNavigation>
            <Navigation isHome={page === '/'} page={page} />
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
