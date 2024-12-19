import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CloseFriend } from "./CloseFriend"
import "../estilos/sidebar.css";

export default function Sidebar() {
  const { user } = useContext(AuthContext);
  const PF = "/";

  return (
    <div className="sidebar">
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
            <NavLink className="sidebarListItemText" to={`/profile/${user.username}`}>
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
          <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
}