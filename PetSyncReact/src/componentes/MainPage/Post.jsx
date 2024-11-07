import React from 'react'
import "../../estilos/Post.css"
import PropTypes from 'prop-types'; 
import { Users } from '../../DummyData';
import { useState } from 'react';
export const Post = ({post}) => {

  
  const [like,setLike] = useState(post.like)
  const [isLiked,setIsLiked] = useState(false)

    
  const [share,setShare] = useState(post.share)
  const [IsShare,setIsShare] = useState(false)


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
                
                <img className='postProfileImg' src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" />
                <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                <span className="postDate">{post?.date}</span>
              </div>
              <div className="postTopRight">
              <i className="bi bi-three-dots-vertical iconsSmall"></i>
              </div>
            </div>
            <div className="postCenter">
              <span className="postText">{post.desc}</span>
              <img className="postImg postImg" src={post.photo}  alt="" />
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
    userId: PropTypes.number,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string,
    photo: PropTypes.string,
    like: PropTypes.number,
    comment: PropTypes.number,
    share: PropTypes.number,
  }).isRequired,
};
