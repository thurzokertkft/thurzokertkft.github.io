import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home'
import { BrowserRouter, Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter initialPath="/">
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('Service Worker regisztrálva:', registration);
    }).catch((error) => {
      console.log('Service Worker regisztrációs hiba:', error);
    });
  });
}



