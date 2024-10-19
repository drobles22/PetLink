import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootswatch/dist/zephyr/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { MainFeed } from './componentes/MainFeed.jsx'
import "../src/estilos/stylesheetMainFeed.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>

  <MainFeed></MainFeed>

  </StrictMode>,
)
