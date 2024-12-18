import { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Importar PropTypes
import { Post } from "./Post";
import axios from "axios";
import "../../estilos/stylesheetMainFeed.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Share } from "./Share";

export const MainFeed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = username
          ? await axios.get(`/api/posts/profile/`+username)
          : await axios.get("api/posts/timeline/"+user._id);
  
        console.log("Fetched posts:", response.data);
        setPosts(

          response.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      } catch (error) {
        console.error("Error tomando los posts:", error);
      }
    };
  
    fetchPost();
  }, [username, user._id]);
  return (
    <div className="feed">
    <div className="feedWrapper">
      {(!username || username === user.username)}
      <Share></Share>
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  </div>
);
}


MainFeed.propTypes = {
  username: PropTypes.string
}