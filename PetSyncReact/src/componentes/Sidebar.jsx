import "../estilos/sidebar.css";
import {
  Chat,
  Group,
  Event,
  Home,
  AccountCircle,
  Settings,
} from '@mui/icons-material';

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
      <h1> PetSync</h1>
        <div>
          <form action="">
            <input type="search" name="" id="" placeholder="Busqueda"/>
          </form>
        </div>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <span className="sidebarListItemText">Inicio</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Perfil</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Amigos</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Eventos</span>
          </li>
          <li className="sidebarListItem">
            <Settings className="sidebarIcon" />
            <span className="sidebarListItemText">Configuracion</span>
          </li>
        </ul> 
        <hr className="sidebarHr" />

        <div className="sidebarPerfil">
        <AccountCircle className="sidebarIcon" />
        <h4 className="sidebarTitle">Perfil</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Pais:</span>
            <span className="rightbarInfoValue">Costa Rica</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Ciudad:</span>
            <span className="rightbarInfoValue">San Jose</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Estado Civil:</span>
            <span className="rightbarInfoValue">Soltero</span>
          </div>
        </div>
        </div>

      </div>
    </div>
    </>
  );
}
