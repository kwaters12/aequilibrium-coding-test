import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TransformersList } from './components/TransformersList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Transformers Battle Zone</h1>
      <TransformersList></TransformersList>
    </div>
  );
}

export default App;
