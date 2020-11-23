import React from 'react';
import Home from './containers/Home/Home';
import './App.scss';
import Header from './containers/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
