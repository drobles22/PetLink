import { useContext, useState } from "react";
import "../../estilos/navbar.css";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UsersSearch } from "./UsersSearch";

export const NavBar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const backendUrl = "http://localhost:8800";
  const PF = "/images/";
  const [searchTerm, setSearchTerm] = useState(""); 
  const [searchResults, setSearchResults] = useState([]); 
  const navigate = useNavigate(); 

 
  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchTerm(query); 

    if (query.trim() === "") {
      setSearchResults([]); 
      return;
    }

    try {
      const response = await axios.get(`/api/users/searchUsers?username=${query}`);
      setSearchResults(response.data); 
    } catch (error) {
      console.error("Error al buscar usuarios:", error);
      setSearchResults([]); 
    }
  };

  // manejar el logout
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }); 
    localStorage.removeItem("user"); 
    navigate("/login"); 
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft"></div>
      <div className="topbarCenter">
        <div className="searchbar">
          <i className="bi bi-search"></i>
          <input
            placeholder="Busca usuarios..."
            className="searchInput"
            value={searchTerm}
            onChange={handleSearch} 
          />
          {searchResults.length > 0 && (
            <UsersSearch results={searchResults} setSearchTerm={setSearchTerm} />
          )}
        </div>
      </div>
      <div className="topbarRight">
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? `${backendUrl}${PF}${user.profilePicture}`
                : `${backendUrl}${PF}defaultUser.jpg`
            }
            alt="User profile"
            className="topbarImg"
          />
        </Link>
        <i className="bi bi-box-arrow-right logoutIcon" onClick={handleLogout}></i>
      </div>
    </div>
  );
};