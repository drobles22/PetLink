import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import 'bootswatch/dist/zephyr/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

//import { MainFeed } from './componentes/MainFeed.jsx'
import "../src/estilos/stylesheetMainFeed.css"

import Sidebar from "./componentes/Sidebar";

import Rightbar from "./componentes/Rightbar";
//<MainFeed></MainFeed>
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <Sidebar />
  <Rightbar/>

  </StrictMode>,
)
