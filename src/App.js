import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Cart from './pages/cart';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route path="/cart" component={ Cart } />
    </BrowserRouter>
  );
}

export default App;
