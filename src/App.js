import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routing from './routes';

const App = () => (
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);

export default App;
