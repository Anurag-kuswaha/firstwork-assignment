import React from 'react';
import logo from './logo.svg';
import HomePage from './pages/homepage';
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <>

      <Header />
      <div className="App">

        <HomePage />
      </div>
    </>
  );
}

export default App;
