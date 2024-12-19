import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext"; // Importando el contexto
import axios from "axios";
import PropTypes from 'prop-types';
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { usePopper } from 'react-popper';
import "../../estilos/Post.css";
import "../../estilos/modalsComents.css"

export const Post = ({ post }) => {
  const { user: currentUser } = useContext(AuthContext); // Usamos el user desde el contexto
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(post.likes.includes(currentUser._id));
  const [share, setShare] = useState(post.shares.length);
  const [IsShare, setIsShare] = useState(false);
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);
  const [commentUsers , setCommentUsers] = useState({});
  const [newComment, setNewComment] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showPopover, setShowPopover] = useState(false); // State for popover visibility
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'right-start',
  });
  const [editMode, setEditMode] = useState(false);
  const [newContent, setNewContent] = useState(post.postdesc);
  const [originalAuthorUsername, setOriginalAuthorUsername] = useState('');
  const backendUrl = "http://localhost:8800"
  const PF = "/images/";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users?userId=${post.userId}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(`/api/posts/${post._id}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    const fetchUserComentarios = async () => {
      try {
        const userPromises = post.comentarios.map(async (comment) => {
          console.log("ID de los comentarios"+comment.userId)
          const responseA = await axios.get(`/api/users?userId=${comment.userId}`);
          return { userId: comment.userId, data: responseA.data };
        });
  
        const userResults = await Promise.all(userPromises);
        const usersMap = {};
        userResults.forEach((user) => {
          usersMap[user.userId] = user.data;
        });
  
        setCommentUsers(usersMap);
      } catch (error) {
        console.error("Error fetching users for comments:", error);
      }
    };

    const fetchOriginalAuthor = async () => {
      if (post.originalAuthor) {
        try {
          const response = await axios.get(`/api/users?userId=${post.originalAuthor}`);
          setOriginalAuthorUsername(response.data.username);
        } catch (error) {
          console.error("Error fetching original author:", error);
        }
      }
    };
  
    fetchUser();
    fetchComments();
    fetchUserComentarios();
    fetchOriginalAuthor();
  }, [post.userId, post._id, post.comentarios, post.originalAuthor]);

  const likeHandler = async () => {
    try {
      await axios.put(`/api/posts/${post._id}/like`, { userId: currentUser._id });
      if (isLiked) {
        setLike(like - 1);
      } else {
        setLike(like + 1);
      }
      setIsLiked(!isLiked);
    } catch (err) {
      console.error("Error updating like:", err);
    }
  };

  const shareHandler = () => {
    setShare(IsShare ? share - 1 : share + 1);
    setIsShare(!IsShare);
  };

  const commentHandler = async () => {
    try {
      const commentData = {
        userId: currentUser._id,
        comentario: newComment,
      };
      await axios.put(`/api/posts/${post._id}/comment`, commentData);
      setComments([...comments, commentData]); // Añadir el comentario nuevo localmente
      setNewComment(""); // Limpiar el input
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  const handleIconClick = () => {
    togglePopover();
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${post._id}`, { data: { userId: currentUser._id } });
      window.location.reload(); // Refresh the page after deleting the post
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleUpdate = () => {
    setEditMode(true);
  };

  const handleSave = async () => {
    try {
      await axios.put(`/api/posts/${post._id}`, { userId: currentUser._id, postdesc: newContent });
      setEditMode(false);
      window.location.reload(); // Refresh the page after updating the post
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleShare = async () => {
    try {
      const newPost = {
        userId: currentUser._id,
        postdesc: post.postdesc,
        attachment: post.attachment,
        originalAuthor: post.userId, // Save original author's user ID
      };
      await axios.post('/api/posts', newPost);
      window.location.reload(); // Refresh the page after sharing the post
    } catch (error) {
      console.error("Error sharing post:", error);
    }
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? `${backendUrl}${PF}${user.profilePicture}` : `${backendUrl}${PF}defaultUser.jpg`
                }
                alt=""
              />
            </Link>
            <span className="postName">{user.name}</span>
            <span className="postUsername">{user?.username || 'Unknown User'}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <i
              className={`bi bi-three-dots-vertical iconsSmall ${showPopover ? 'active' : ''}`}
              onClick={handleIconClick}
              ref={setReferenceElement}
            ></i>
            {showPopover && (
              <div className="popover" ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                <ul>
                  {currentUser.isAdmin && post.userId !== currentUser._id && (
                    <>
                      <li onClick={handleDelete}>
                        <i className="bi bi-trash"></i>
                        <span>Delete</span>
                      </li>
                      <li onClick={handleShare}>
                        <i className="bi bi-pencil"></i>
                        <span>Compartir</span>
                      </li>
                    </>
                  )}
                  {currentUser.isAdmin && post.userId === currentUser._id && (
                    <>
                      <li onClick={handleDelete}>
                        <i className="bi bi-trash"></i>
                        <span>Delete</span>
                      </li>
                      <li onClick={handleShare}>
                        <i className="bi bi-pencil"></i>
                        <span>Compartir</span>
                      </li>
                      <li onClick={handleUpdate}>
                        <i className="bi bi-info-circle"></i>
                        <span>Update</span>
                      </li>
                    </>
                  )}
                  {!currentUser.isAdmin && post.userId !== currentUser._id && (
                    <li onClick={handleShare}>
                      <i className="bi bi-pencil"></i>
                      <span>Compartir</span>
                    </li>
                  )}
                  {!currentUser.isAdmin && post.userId === currentUser._id && (
                    <>
                      <li onClick={handleDelete}>
                        <i className="bi bi-trash"></i>
                        <span>Eliminar</span>
                      </li>
                      <li onClick={handleShare}>
                        <i className="bi bi-share"></i>
                        <span>Compartir</span>
                      </li>
                      <li onClick={handleUpdate}>
                        <i className="bi bi-pencil"></i>
                        <span>Actualizar</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="postCenter">
          {post.originalAuthor && (
            <span className="originalAuthor">Original author: {originalAuthorUsername}</span>
          )}
          {editMode ? (
            <div>
              <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                rows="3"
                className="form-control"
              />
              <button onClick={handleSave} className="btn btn-primary mt-2">Save</button>
            </div>
          ) : (
            <span className="postText">{post?.postdesc}</span>
          )}
          <img className="postImg" src={`${backendUrl}${post.attachment}`} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft postLikeCounter">
            <i onClick={likeHandler} style={{ color: isLiked ? "red" : "" }} className={`iconsPostmargin ${isLiked ? 'bi bi-heart-fill' : 'bi bi-heart'}`}></i>
            <span className="postLikeCounter"> {like} Likes </span>
          </div>
          <div className="postBottomRight postLikeCounter">
            <i onClick={shareHandler} style={{ color: IsShare ? "green" : "" }} className="bi bi-arrow-repeat iconsPostmargin"></i>
            <span className="postCommentText"> {share} repostear</span>
          </div>
          <div className="postBottomRight postLikeCounter">
            <i className="bi bi-chat-left-dots iconsPostmargin" onClick={() => setShowModal(true)}></i>
            <span className="postCommentText">{comments.length} comentarios</span>
          </div>
        </div>
      </div>

      {/* Modal para comentarios */}
      {showModal && (
  <div className="commentModal">
    <div className="modalContent">
      <h3>Comentarios</h3>
      {/* Mostrar comentarios */}
      <div className="commentsList">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={index} className="commentItem">
              {commentUsers[comment.userId] ? (
                <>
                  <img
                    className="commentProfileImg"
                    src={
                      commentUsers[comment.userId].profilePicture ||
                      PF + "defaultUser.jpg"
                    }
                    alt={commentUsers[comment.userId].name || "User"}
                  />
                  <div className="commentText">
                    <strong>{commentUsers[comment.userId].name || "Usuario desconocido"}</strong>
                    <p>{comment.comentario}</p>
                  </div>
                </>
              ) : (
                <div className="commentText">
                  <p>Cargando usuario...</p>
                </div>
              )}
            </div>
          ))
) : (
  <p>No hay comentarios aún.</p>
)}
            </div>
            {/* Formulario para agregar un comentario */}
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Escribe tu comentario..."
              rows="3"
            />
            <button className="commentModalBtnSubmit" onClick={commentHandler}>Agregar Comentario</button>
            <button className="commentModalBtnClose" onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    postdesc: PropTypes.string.isRequired,
    attachment: PropTypes.string,
    likes: PropTypes.array.isRequired,
    shares: PropTypes.array.isRequired,
    comentarios: PropTypes.arrayOf(
      PropTypes.shape({
        userId: PropTypes.string.isRequired,
        comentario: PropTypes.string.isRequired,
      })
    ).isRequired,
    createdAt: PropTypes.string.isRequired, 
    originalAuthor: PropTypes.string, // Add this line
  }).isRequired,
};