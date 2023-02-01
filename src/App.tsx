import React from 'react';
import 'normalize.css';
// import Button from './components/UI/atoms/Button';
import GridContainer from './components/UI/molecules/GridContainer';
import GridCell from './components/UI/atoms/GridCell';
// import Card from './components/UI/molecules/Card';
import Frame from './components/UI/atoms/Frame';
import Potion from './components/UI/atoms/Potion';
import Button from './components/UI/atoms/Button';

function App() {
  return (
    <Frame>
      <Potion />
      <div style={{
        position: "fixed",
        minWidth: "100vw",
        top: "60vh",
        color: "white",
        textAlign: "center",
        fontSize: "3vw",
        fontWeight: "bold",
        pointerEvents: "none",
        WebkitTextFillColor: "black",
        WebkitTextStrokeWidth: "1px",
        WebkitTextStrokeColor: "white",
        textShadow: [
          "-3px  -3px 0 #fff",
          "-2px  -2px 0 #fff",
          "-1px  -1px 0 #fff",
          "1px  1px 0 #fff",
          "2px  2px 0 #fff",
          "3px  3px 0 #fff",
          "4px  4px 0 #fff",
          "5px  5px 0 #fff",
          "6px  6px 0 #fff",
        ].join(", "),
      }}>
        mjgargani's Lab 
      </div>
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
