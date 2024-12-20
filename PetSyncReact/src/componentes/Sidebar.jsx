import { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../estilos/sidebar.css";

export default function Sidebar() {
  const { user } = useContext(AuthContext);
  const PF = "/";
  const [isOpen, setIsOpen] = useState(false); // Estado del sidebar

  const toggleSidebar = () => setIsOpen(!isOpen); // Función para alternar el estado

  return (
    <>
      {/* Botón para abrir/cerrar el sidebar */}
      <button className="toggleSidebarButton" onClick={toggleSidebar}>
        {isOpen ? "☰" : "☰"}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h1 className="sidebarLogo">PetSync</h1>
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <NavLink className="sidebarListItemText" to="/">
                <i className="bi bi-house" />
                Inicio
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink
                className="sidebarListItemText"
                to={`/profile/${user.username}`}
              >
                <i className="bi bi-person-circle" />
                Perfil
              </NavLink>
            </li>
            <li className="sidebarListItem">
              <NavLink className="sidebarListItemText" to="/friends">
                <i className="bi bi-people" />
                Amigos
              </NavLink>
            </li>
          </ul>
          <hr className="sidebarHr" />
          <div className="sidebarPerfil">
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "personProfile/defaultUser.jpg"
                }
                alt="User profile"
                className="topbarImg1"
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