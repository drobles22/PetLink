import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootswatch/dist/zephyr/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { MainFeed } from './componentes/MainPage/MainFeed.jsx'
import "../src/estilos/stylesheetMainFeed.css"
import { Profile } from './componentes/ProfilePage/Profile.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>

 <MainFeed></MainFeed>
   <Profile></Profile>

  </StrictMode>,
)
