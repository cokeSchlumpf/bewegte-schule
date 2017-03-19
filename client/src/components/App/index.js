import { Container } from 'semantic-ui-react'
import HelloWorld from '../HelloWorld';
import ProjectSelection from '../projectselection';
import React from 'react';

const App = () => {
  return (
    <Container fluid={ true }>
      <ProjectSelection />
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <HelloWorld />
    </Container>
  );
}

export default App;
