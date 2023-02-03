import React from 'react';
import 'normalize.css';
import GridContainer from './components/UI/molecules/GridContainer';
import GridCell from './components/UI/atoms/GridCell';
import Frame from './components/UI/atoms/Frame';
import Potion from './components/UI/atoms/Potion';
import Button from './components/UI/atoms/Button';
import Home from './pages/Home';
// import Card from './components/UI/molecules/Card';

function App() {
  return (
    <Frame>
      <Potion transparent={true}/>
      <Home show={false} />
      <div style={{
        position: "fixed",
        minWidth: "60vw",
        top: "75vh",
        left: "20vw",
        textAlign: "center",
        fontSize: "2vw",
      }}>
        <GridContainer templateColumns={3} columnGap={10}>
          <GridCell>
            <Button> início</Button>
          </GridCell>
          <GridCell>
            <Button> projetos</Button>
          </GridCell>
          <GridCell>
            <Button> sobre</Button>
          </GridCell>
        </GridContainer>
      </div>
    </Frame>
  );
}

export default App;
