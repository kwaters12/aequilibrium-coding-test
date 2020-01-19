import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TransformersBattleZone } from './components/TransformersBattleZone';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Transformers Battle Zone</h1>
      <TransformersBattleZone></TransformersBattleZone>
    </div>
  );
}

export default App;
