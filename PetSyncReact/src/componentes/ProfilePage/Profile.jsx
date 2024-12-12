
import "../../estilos/profile.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { Post } from '../MainPage/Post'
import { Posts } from "../../DummyData";
import { FollowersList } from '../FollowersList/FollowersList';
import { PendingRequestsList } from "../FollowersList/PendingRequestList";
import { RecommendedAccountsList } from "../FollowersList/RecommendedAccounts";
import { MainFeed } from "../MainPage/MainFeed";
import { useParams } from "react-router";

export const Profile = () => {

  

  const [user, setUser] = useState({})
  const [postCount, setPostCount] = useState(0); 

  const Username = useParams().username


  const PF = "/"


  useEffect(() => {
    const fetchPostCount = async () => {
      try {
        const response = await axios.get(`/api/posts/profile/${Username}`);
        setPostCount(response.data.length); 
      } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
      }
    };
    fetchPostCount();
  }, [Username]);
  


  useEffect(() => {

    const fetchUser = async ()=>{

      const response = await axios.get(`/api/users?username=${Username}`);
     
      setUser(response.data);
   

    }
    fetchUser();

  }, [Username])
  


  return (
    <>
    
    <div className="profile">
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img
              className="profileCoverImg"
              src={user.coverPic || PF + "personProfile/coverpic.png"}
              alt=""
            />
            <img
              className="profileUserImg"
              src={user.profilePicture || PF + "personProfile/defaultUser.jpg"}
              alt=""
            />
          </div>
          <div className="profileInfo">
              <h4 className="profileInfoName">{user.name}</h4>
              <h6>@{user.username}</h6>
              <h6>{user.country}</h6>  
              <div className='followersContainer'>
                <div className="div followersInfo">
                    <strong><span>{postCount}</span></strong>
                    <span>publicaciones</span>
                </div>
                <div className="div followersInfo">
                    <strong><span>{user.followers ? user.followers.length : 0}</span></strong>
                    <span>seguidores</span>
                </div>
                <div className="div followersInfo">
                    <strong><span>{user.followings ? user.followings.length : 0}</span></strong>
                    <span>seguidos</span>
                </div>
              </div>
              <span><strong>Acerca de: </strong></span>
              <span className="profileInfoDesc">{user.descr}</span>
              <br />
              <span><strong>Informacion </strong></span>
              <div></div>

          </div>
          <MainFeed username={Username}></MainFeed>
        </div>
      </div>
    </div>
  </>
  )
}
