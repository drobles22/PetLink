import "../../estilos/Post.css"
import PropTypes from 'prop-types'; 
import { useState,useEffect} from 'react';
import axios from "axios";
import {format} from "timeago.js"
import { Link } from "react-router-dom";
export const Post = ({post}) => {

  
  const [like,setLike] = useState(post.likes.length)
  const [isLiked,setIsLiked] = useState(false)

    
  const [share,setShare] = useState(post.shares.length)
  const [IsShare,setIsShare] = useState(false)

  const [user,setUser] = useState({})

  const PF = "/"


  useEffect(() => {
    const fetchUser = async () => {
      if (!post.userId) {
        console.error("post.userId is undefined");
        return;
      }
  
      console.log(`Fetching user with ID: ${post.userId}`);
      console.log("User ID:", post.userId);

  
      try {
        const response = await axios.get(`/api/users?userId=${post.userId}`);
        console.log("User data fetched:", response.data);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
  
    fetchUser();
  }, [post.userId]);


  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  const shareHandler =()=>{
    setShare(IsShare ? share-1 : share+1)
    setIsShare(!IsShare)
  }

    return (
        <div className="post">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
              <Link to={`/profile/${user.username}`}>
              
              <img
  className="postProfileImg"
  src={user.profilePicture !== "" && user.profilePicture !== null 
      ? PF + user.profilePicture 
      : PF + "personProfile/defaultUser.jpg"
  }
  alt=""
/>
            </Link>
               
                <span className="postName">{user.name}</span>
                <span className="postUsername">{user?.username || 'Unknown User'}</span>
                <span className="postDate">{format(post.createdAt)}</span>
              </div>
              <div className="postTopRight">
              <i className="bi bi-three-dots-vertical iconsSmall"></i>
              </div>
            </div>
            <div className="postCenter">
              <span className="postText">{post?.postdesc}</span>
              <img className="postImg postImg" src={PF + ""+ post.attachment}  alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft postLikeCounter">
               <i onClick={likeHandler} style={{color:isLiked ? `red`: ``}} className={`iconsPostmargin ${isLiked ? 'bi bi-heart-fill' : 'bi bi-heart'}`}></i>
                <span className="postLikeCounter"> {like} people like it</span>
              </div>
              <div className="postBottomRight postLikeCounter">
                <i className="bi bi-chat-left-dots iconsPostmargin"></i>
                <span className="postCommentText">{post.comment} comments</span>
              </div>
              <div className="postBottomRight postLikeCounter">
                <i onClick={shareHandler} style={{color:IsShare ? `green`: ``}} className="bi bi-arrow-repeat iconsPostmargin"></i>
                <span className="postCommentText"> {share} repost</span>
              </div>
            </div>
          </div>
        </div>
      );
}

Post.propTypes = {
  post: PropTypes.shape({
    userId: PropTypes.string,
    date: PropTypes.string,
    postdesc: PropTypes.string,
    attachment: PropTypes.string,
    likes: PropTypes.array,
    comment: PropTypes.number,
    shares: PropTypes.array,
  }).isRequired,
};
