import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Importa el archivo App.jsx
import './index.css';
import 'bootswatch/dist/zephyr/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./estilos/stylesheetMainFeed.css"

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);