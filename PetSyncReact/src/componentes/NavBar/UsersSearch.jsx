import React from "react";
import { Link } from "react-router-dom";
import "../../estilos/UsersSearch.css"

export const UsersSearch = ({ results, setSearchTerm }) => {
  const handleClearSearch = () => {
    setSearchTerm(""); // Limpiar el campo de búsqueda
  };

  return (
    <div className="usersSearchContainer">
      {/* Mostrar cada usuario encontrado en la búsqueda */}
      {results.map((user) => (
        <Link
          to={`/profile/${user.username}`}
          key={user._id}
          className="userSearchItem"
          onClick={handleClearSearch}
        >
          <img
            src={user.profilePicture || "/personProfile/defaultUser.jpg"}
            alt={user.username}
            className="userSearchImg"
          />
          <div className="userSearchInfo">
            <span className="userSearchName">{user.name}</span>
            <span className="userSearchUsername">@{user.username}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};