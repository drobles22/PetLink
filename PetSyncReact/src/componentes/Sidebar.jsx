import "../estilos/sidebar.css";

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
            <i className="bi bi-house" />
            <a href="../main.jsx" className="sidebarListItemText">Inicio</a>
          </li>
          <li className="sidebarListItem">
            <i className="bi bi-person-circle" />
            <span className="sidebarListItemText">Perfiles</span>
          </li>
          <li className="sidebarListItem">
            <i className="bi bi-people" />
            <span className="sidebarListItemText">Amigos</span>
          </li>
          <li className="sidebarListItem">
            <i className="bi bi-calendar-event"/>
            <span className="sidebarListItemText">Eventos</span>
          </li>
          <li className="sidebarListItem">
            <i className="bi bi-gear" />
            <span className="sidebarListItemText">Configuracion</span>
          </li>
        </ul> 
        <hr className="sidebarHr" />

        <div className="sidebarPerfil">
        <i className="bi bi-newspaper"/>
        <a href="./ProfilePage/Profile.jsx">Perfil</a>
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
            <span className="rightbarInfoValue">Soltera</span>
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}
