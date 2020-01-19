import React from 'react';
import logo from './logo.png';
import './App.css';
import { TransformersBattleZone } from './components/TransformersBattleZone';

const App: React.FC = () => {
  return (
    <div className="App">
      <img src={logo} style={{ width: '300px' }} />
      <h2 style={{ margin: 0 }}>Battle Zone</h2>
      <TransformersBattleZone></TransformersBattleZone>
    </div>
  );
}

export default App;
