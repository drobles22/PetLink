import "../../estilos/profile.css"
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MainFeed } from "../MainPage/MainFeed";
import { NavBar } from "../NavBar/navbar";
import { AuthContext } from "../../context/AuthContext"; // Importa el contexto de autenticación
import { useParams } from "react-router";

export const Profile = () => {
  const { user: currentUser } = useContext(AuthContext); 
  const [user, setUser] = useState({});
  const [postCount, setPostCount] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false); 
  const [isPrivate, setIsPrivate] = useState(false); 

  const Username = useParams().username;
  const PF = "/";

 
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

  // verificar privacidad
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users?username=${Username}`);
        setUser(response.data);
        setIsPrivate(response.data.itsPrivate); 
        console.log(response.data.itsPrivate)


        if (currentUser.followings?.includes(response.data._id)) {
          setIsFollowing(true);
        }
        console.log("¿El usuario sigue este perfil?", isFollowing);

      } catch (error) {
        console.error("Error al obtener el perfil:", error);
      }
    };
    fetchUser();
  }, [Username, currentUser]);

  const renderProfileContent = () => {
    if (isPrivate && !isFollowing) {
      return <div>Este perfil es privado. Debes seguir a esta persona para ver su contenido.</div>;
    }

    if (isPrivate && isFollowing) {
      return (
        <div>
          <MainFeed username={Username} />
        </div>
      );
    }

    return <MainFeed username={Username} />;
  };

  return (
    <>
      <NavBar />
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
              <div className="followersContainer">
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
              <span><strong>Información</strong></span>
              <div></div>
            </div>
          </div>
          {renderProfileContent()} 
        </div>
      </div>
    </>
  );
};