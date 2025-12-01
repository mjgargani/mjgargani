import Frame from './components/molecules/Frame';
import MainTemplate from './components/templates/Main';
import { GitHubDataContext, useGitHubDataValues } from './context/GitHubData';
import About from './pages/About';
import Home from './pages/Home';
import Repos from './pages/Repos';
import { defaultTheme } from './styles/defaults/defaultTheme';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function App() {
  const appData = useGitHubDataValues();

  return (
    <ThemeProvider theme={defaultTheme}>
      <GitHubDataContext.Provider value={appData}>
        <Frame />
        <MainTemplate>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Repos />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </MainTemplate>
      </GitHubDataContext.Provider>
    </ThemeProvider>
  );
}

export default App;
