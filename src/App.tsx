import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/UI/atoms/Button';
import GridContainer from './components/UI/molecules/GridContainer';
import GridCell from './components/UI/atoms/GridCell';

function App() {
  return (
    <GridContainer templateColumns={2}>
      <GridCell>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload. Eita
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Learn React</Button>
            </a>
          </header>
        </div>
      </GridCell>
      <GridCell>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload. Eita
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Learn React</Button>
            </a>
          </header>
        </div>
      </GridCell>
    </GridContainer>
  );
}

export default App;
