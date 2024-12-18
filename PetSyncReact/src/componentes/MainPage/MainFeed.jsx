import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Importar PropTypes
import { Post } from "./Post";
import { Share } from "./Share"; // Importa el componente Share
import axios from "axios";
import "../../estilos/stylesheetMainFeed.css";

export const MainFeed = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = username
          ? await axios.get(`/api/posts/profile/${username}`)
          : await axios.get("/api/posts/timeline/6712fdbba4c3191dee6e3539");

        console.log("Fetched posts:", response.data);
        setPosts(response.data);
      } catch (error) {
        console.error("Error tomando los posts:", error);
      }
    };

    fetchPost();
  }, [username]);

  return (
    <div className="container feedcontainer">
      {/* Componente Share */}
      <Share />

      {/* Muestra las publicaciones */}
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}

      <hr />
    </div>
  );
};

MainFeed.propTypes = {
  username: PropTypes.string,
};
