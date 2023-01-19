import React from 'react';
import 'normalize.css';
// import logo from './logo.svg';
import './App.css';
// import Button from './components/UI/atoms/Button';
import GridContainer from './components/UI/molecules/GridContainer';
import GridCell from './components/UI/atoms/GridCell';
import Card from './components/UI/molecules/Card';
import Frame from './components/UI/atoms/Frame';

function App() {
  return (
    <Frame>
      <GridContainer templateColumns={3}>
        <GridCell>
          <Card 
            bgImg="https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ"
          >Teste</Card>
        </GridCell>
        <GridCell>
          <Card 
            bgImg="https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ"
          >Teste</Card>
        </GridCell>
        <GridCell>
          <Card 
            bgImg="https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ"
          >Teste</Card>
        </GridCell>
        <GridCell>
          <Card 
            bgImg="https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ"
          >Teste</Card>
        </GridCell>
        <GridCell>
          <Card 
            bgImg="https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ"
          >Teste</Card>
        </GridCell>
        <GridCell>
          <Card 
            bgImg="https://play-lh.googleusercontent.com/V_P-I-UENK93ahkQgOWel8X8yFxjhOOfMAZjxXrqp311Gm_RBtlDXHLQhwFZN8n4aIQ"
          >Teste</Card>
        </GridCell>
        {/* <GridCell>
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
        </GridCell> */}
      </GridContainer>
    </Frame>
  );
}

export default App;
