import React from 'react';
import 'normalize.css';
// import logo from './logo.svg';
import './App.css';
// import Button from './components/UI/atoms/Button';
import GridContainer from './components/UI/molecules/GridContainer';
import GridCell from './components/UI/atoms/GridCell';
// import Card from './components/UI/molecules/Card';
import Frame from './components/UI/atoms/Frame';
import Potion from './components/UI/atoms/Potion';

function App() {
  return (
    <Frame>
      <GridContainer>
        <GridCell>
          <Potion />
        </GridCell>
      </GridContainer>
    </Frame>
  );
}

export default App;
