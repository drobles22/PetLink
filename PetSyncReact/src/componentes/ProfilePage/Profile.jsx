import "../../estilos/profile.css";
import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { MainFeed } from "../MainPage/MainFeed";
import { NavBar } from "../NavBar/navbar";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router";
import Sidebar from "../Sidebar";
import Rightbar from "../Rightbar";
import "../../estilos/modalConfig.css";

export const Profile = () => {
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [postCount, setPostCount] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);
const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    descr: "",
    city: "",
    country: "",
    itsPrivate: false,
  });

  const Username = useParams().username;
  const backendUrl = "http://localhost:8800";
  const PF = "/images/";
  const fileInputRef = useRef(null);

  // Obtener publicaciones
  useEffect(() => {
    const fetchPostCount = async () => {
      try {
        const response = await axios.get(`/api/posts/profile/${Username}`);
        setPostCount(response.data.length);
      } catch (error) {
        console.error("Error al obtener las publicaciones:", error);
      }
    };
    fetchPostCount();
  }, [Username]);

  // Obtener usuario y verificar si está seguido
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users?username=${Username}`);
        setUser(response.data);
        setFormData({
          name: response.data.name || "",
          lastName: response.data.lastName || "",
          descr: response.data.descr || "",
          city: response.data.city || "",
          country: response.data.country || "",
          itsPrivate: response.data.itsPrivate || false,
        });

        setIsFollowing(currentUser.followings?.includes(response.data._id));
      } catch (error) {
        console.error("Error al obtener el perfil:", error);
      }
    };
    fetchUser();
  }, [Username, currentUser]);

  const handleClick = async () => {
    try {
      if (isFollowing) {
      
        await axios.put(`http://localhost:8800/api/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
       
        dispatch({ type: "UNFOLLOW", res: user._id });
      } else {
       
        await axios.put(`http://localhost:8800/api/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
       
        dispatch({ type: "FOLLOW", res: user._id });
      }
      
    
      setIsFollowing(prev => !prev); 
    } catch (err) {
      console.log(err);
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSwitchChange = (e) => {
    setFormData({ ...formData, itsPrivate: e.target.checked });
  };

  const handleUpdate = async () => {
    try {
      const updateData = {
        userId: currentUser._id,
        ...formData,
      };

      await axios.put(`/api/users/${currentUser._id}`, updateData);
      setShowModal(false);
      setUser((prev) => ({ ...prev, ...formData }));
    } catch (error) {
      console.error("Error al actualizar los datos:", error);
      alert("Error al actualizar los datos.");
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      const fileName = `${Username}${Date.now()}_${file.name}`;
      formData.append("name", fileName);
      formData.append("file", file);

      try {
        await axios.post("/api/upload", formData);
        await axios.put(`/api/users/${currentUser._id}`, {
          userId: currentUser._id,
          profilePicture: fileName,
        });
        setUser((prev) => ({ ...prev, profilePicture: fileName }));
      } catch (err) {
        console.error("Error uploading file:", err);
      }
    }
  };

  const renderProfileContent = () => {
    if (currentUser.username === Username) {
      return <MainFeed username={Username} />;
    }

    if (formData.itsPrivate && !isFollowing) {
      return (
        <div>
          Este perfil es privado. Debes seguir a esta persona para ver su
          contenido.
        </div>
      );
    }

    return <MainFeed username={Username} />;
  };

  return (
    
    <>
     <NavBar />
    <div className="profileContainer">
      
      <Sidebar />
      <div className="mainContent">
        <div className="profile">
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src={user.coverPic ? `${backendUrl}${PF}${user.coverPic}` : `${backendUrl}${PF}coverpic.png`}
                  alt=""
                  onClick={() => currentUser.username === Username && fileInputRef.current.click()}
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  accept=".png,.jpg"
                  onChange={handleFileChange}
                />
                <img
                  className={`profileUserImg ${currentUser.username === Username ? "clickable" : ""}`}
                  src={
                    user.profilePicture
                      ? `${backendUrl}${PF}${user.profilePicture}`
                      : `${backendUrl}${PF}defaultUser.jpg`
                  }
                  alt=""
                  onClick={() => currentUser.username === Username && fileInputRef.current.click()}
                />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">{user.name}</h4>
                <h6>@{user.username}</h6>
                {user.username !== currentUser.username && (
                    <button
                    className={`follow-btn ${isFollowing ? "unfollow" : "follow"}`}
                    onClick={handleClick}
                    disabled={loading} 
                  >
                    {loading ? "Cargando..." : isFollowing ? "Unfollow" : "Follow"}
                  </button>
                )}
                <div className="followersContainer">
                  <div className="div followersInfo">
                    <strong>
                      <span>{postCount}</span>
                    </strong>
                    <span>publicaciones</span>
                  </div>
                  <div className="div followersInfo">
                    <strong>
                      <span>{user.followers ? user.followers.length : 0}</span>
                    </strong>
                    <span>seguidores</span>
                  </div>
                  <div className="div followersInfo">
                    <strong>
                      <span>{user.followings ? user.followings.length : 0}</span>
                    </strong>
                    <span>seguidos</span>
                  </div>
                </div>
                <span>
                  <strong>Acerca de: </strong>
                </span>
                <span className="profileInfoDesc">{user.descr}</span>
                <div>
                  <br />
                  <span>
                    <strong>Pais: </strong>
                  </span>
                  <span className="profileInfoDesc">{user.country}</span>
                  <span style={{ padding: 5 }}></span>
                  <span>
                    <strong>Ciudad: </strong>
                  </span>
                  <span className="profileInfoDesc">{user.city}</span>
                  <span className="profileInfoDesc">
                    {currentUser.username === Username && (
                      <button
                        className="configButton"
                        onClick={() => {
                          setShowModal(true);
                        }}
                      >
                        <i className="bi bi-gear-fill"></i>
                      </button>
                    )}
                  </span>
                </div>
                <br />
              </div>
            </div>
            {renderProfileContent()}
          </div>
        </div>
      </div>
      <Rightbar />
      {showModal && (
        <div className="profile-modal">
          <div className="profile-modal-content">
            <h2>Configuraciones del Perfil</h2>
            <form>
              <div className="profile-modal-field">
                <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-modal-field">
                <label htmlFor="lastName">Apellido</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-modal-field">
                <label htmlFor="descr">Descripción</label>
                <input
                  id="descr"
                  name="descr"
                  type="text"
                  value={formData.descr || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-modal-field">
                <label htmlFor="city">Ciudad</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-modal-field">
                <label htmlFor="country">País</label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  value={formData.country || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-modal-field">
                <label htmlFor="itsPrivate">¿Privado?</label>
                <input
                  id="itsPrivate"
                  name="itsPrivate"
                  type="checkbox"
                  checked={formData.itsPrivate}
                  onChange={handleSwitchChange}
                />
              </div>
            </form>
            <div className="profile-modal-buttons">
              <button onClick={handleUpdate}>Guardar</button>
              <button onClick={() => setShowModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
  
};