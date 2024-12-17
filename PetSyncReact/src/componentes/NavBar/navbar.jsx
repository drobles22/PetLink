import { useContext, useState } from "react";
import "../../estilos/navbar.css";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { UsersSearch } from "./UsersSearch";

export const NavBar = () => {
  const { user } = useContext(AuthContext); // Obtener el usuario desde el contexto
  const PF = "/"; // Prefijo para las rutas de las imágenes
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
  const [searchResults, setSearchResults] = useState([]); // Resultados de búsqueda

  // Función para manejar la búsqueda de usuarios
  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchTerm(query); // Actualizar el término de búsqueda

    if (query.trim() === "") {
      setSearchResults([]); // Limpiar resultados si el input está vacío
      return;
    }

    try {
      const response = await axios.get(`/api/users/searchUsers?username=${query}`);
      setSearchResults(response.data); // Guardar los resultados en el estado
    } catch (error) {
      console.error("Error al buscar usuarios:", error);
      setSearchResults([]); // Limpiar resultados si ocurre un error
    }
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
            onChange={handleSearch} // Llamar a handleSearch cuando cambia el input
          />
          {/* Mostrar resultados de búsqueda solo si hay resultados */}
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
                ? PF + user.profilePicture // Si tiene imagen de perfil, usarla
                : PF + "personProfile/defaultUser.jpg" // Si no, usar la imagen por defecto
            }
            alt="User profile"
            className="topbarImg" // Asegúrate de que la clase CSS esté definida
          />
        </Link>
      </div>
    </div>
  );
}