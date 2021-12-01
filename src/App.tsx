import React from 'react'
import './App.css';
import EventPrinter from './components/EventPrinter';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://paintswap.finance" target="_blank" rel="noreferrer"><img src="./logo.png" alt="logo" className="App-logo" /></a>
        <h1>
          NFT Live Events
        </h1>
        <span className="App-subtitle"><a href="https://github.com/PaintSwap/paintswap-marketplace-listener" target="_blank" rel="noreferrer">Code</a> | <a href="https://www.npmjs.com/package/@paintswap/marketplace-interactions" target="_blank" rel="noreferrer">Library</a></span>
      </header>
      <EventPrinter />
    </div>
  );
}

export default React.memo(App);
