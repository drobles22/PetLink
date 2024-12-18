import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import PropTypes from "prop-types";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import "../../estilos/Post.css";

export const Post = ({ post }) => {
  const { user: currentUser } = useContext(AuthContext);
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  
  // URL base del backend
  const backendUrl = "http://localhost:8800"; // Reemplazar por la URL en producción si aplica

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users?userId=${post.userId}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        {/* Encabezado del post */}
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? `${backendUrl}/images/${user.profilePicture}`
                    : `${backendUrl}/images/defaultUser.jpg`
                }
                alt="profile"
              />
            </Link>
            <span className="postName">{user.name}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
        </div>

        {/* Cuerpo del post */}
        <div className="postCenter">
          <span className="postText">{post?.postdesc}</span>
          {/* Mostrar imagen adjunta si existe */}
          {post.attachment && (
            <img
              className="postImg"
              src={`${backendUrl}${post.attachment}`} // Ruta completa a la imagen
              alt="post attachment"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `${backendUrl}/images/defaultImage.jpg`; // Imagen predeterminada si falla
              }}
            />
          )}
        </div>

        {/* Parte inferior del post */}
        <div className="postBottom">
          <div className="postBottomLeft">
            <i
              onClick={likeHandler}
              style={{ color: isLiked ? "red" : "" }}
              className={`bi ${isLiked ? "bi-heart-fill" : "bi-heart"}`}
            ></i>
            <span className="postLikeCounter">{like} Likes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    postdesc: PropTypes.string.isRequired,
    attachment: PropTypes.string, // Imagen adjunta
    likes: PropTypes.array.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};
