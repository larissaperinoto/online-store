import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />

    </BrowserRouter>
  );
}

export default App;
