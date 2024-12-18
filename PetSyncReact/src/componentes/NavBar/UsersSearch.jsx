import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../estilos/UsersSearch.css";

export const UsersSearch = ({ results, setSearchTerm }) => {
  const handleClearSearch = () => {
    setSearchTerm("");
  };

  if (!Array.isArray(results) || results.length === 0) {
    return null;
  }

  return (
    <div className="usersSearchContainer">
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

UsersSearch.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      profilePicture: PropTypes.string,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default UsersSearch;