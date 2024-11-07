import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootswatch/dist/zephyr/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { MainFeed } from './componentes/MainPage/MainFeed.jsx'
import "../src/estilos/stylesheetMainFeed.css"
import { Profile } from './componentes/ProfilePage/Profile.jsx';
import Sidebar from './componentes/Sidebar.jsx';
import Rightbar from './componentes/Rightbar.jsx';
import "./estilos/homeContainer.css"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='homeContainer'>
    <Sidebar></Sidebar>
    <MainFeed></MainFeed>
    <Rightbar></Rightbar>
    </div>
   <Profile></Profile>

  </StrictMode>,
)
