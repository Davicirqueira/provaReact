import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import Inicio from './pages/Inicio';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>
);

