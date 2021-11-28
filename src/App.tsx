import React from 'react'
import './App.css';
import EventPrinter from './components/EventPrinter';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://paintswap.finance" target="_blank"><img src="./logo_white.png" alt="logo" className="App-logo" /></a>
        <h1>
          NFT Live Events
        </h1>
      </header>
      <EventPrinter />
    </div>
  );
}

export default React.memo(App);
