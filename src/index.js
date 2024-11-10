import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home'
import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Home />
    </HashRouter>
  </React.StrictMode>
);





