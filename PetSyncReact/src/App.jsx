import { Routes, Route } from 'react-router-dom';
import Home from './componentes/Home/Home';
import { Profile } from './componentes/ProfilePage/Profile';
import './App.css'
import "./estilos/stylesheetMainFeed.css"
import './index.css';
import 'bootswatch/dist/zephyr/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./estilos/navbar.css"


import '../src/estilos/stylesheetMainFeed.css';

function App() {

  return (
    <div className="homeContainer">
    <Routes>
      {/* Ruta principal */}
      <Route path="/" element={<Home />} />
      {/* Ruta del perfil */}
      <Route path="/profile/:username" element={<Profile />} />
    </Routes>
  </div>
  )
}

export default App
