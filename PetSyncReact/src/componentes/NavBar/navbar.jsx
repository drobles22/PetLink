import { useContext } from "react";
import "../../estilos/navbar.css";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export const NavBar =() => {

  const {user} = useContext(AuthContext)
  const PF = "/"

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
        <i className="bi bi-search"></i>
          <input
            placeholder="Busca lo que gustes!"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <i className="bi bi-person-fill"></i>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
          <i className="bi bi-bell-fill"></i>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
         <img src={user.profilePicture ? 
        PF + user.profilePicture 
      : PF + "personProfile/defaultUser.jpg" } 
      alt="" className="topbarImg"/>
        </Link>
       
      </div>
    </div>
  );
}