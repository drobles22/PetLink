import "../estilos/sidebar.css";
import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Sidebar() {

    const { user } = useContext(AuthContext); 
    const PF = "/"; 

  return (
    <>
      <div className="sidebar">
      <h1> PetSync</h1>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
         
          <li className="sidebarListItem">
            <NavLink to='/home'><i className="bi bi-house" /> <a className="sidebarListItemText">Inicio</a> </NavLink>
          </li>

          <li className="sidebarListItem">
            <NavLink to='/Profile'><i className="bi bi-person-circle" /> <a className="sidebarListItemText">Perfil</a> </NavLink>
          </li>

          <li className="sidebarListItem">
            <NavLink to='/'><i className="bi bi-people"/> <a className="sidebarListItemText">Amigos</a> </NavLink>
          </li>
        
          <li className="sidebarListItem">
            <NavLink to='/'><i className="bi bi-calendar-event"/> <a className="sidebarListItemText">Eventos</a> </NavLink>
          </li>

          <li className="sidebarListItem">
            <NavLink to='/'><i className="bi bi-gear"/> <a className="sidebarListItemText">Configuracion</a> </NavLink>
          </li>
        </ul> 

        <hr className="sidebarHr" />



        <div className="sidebarPerfil">
        
        <i className="bi bi-newspaper"/>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture 
                : PF + "personProfile/defaultUser.jpg" 
            }
            alt="User profile"
            className="topbarImg"
          />
        </Link>

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
