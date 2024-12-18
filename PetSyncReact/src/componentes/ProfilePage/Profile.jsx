import "../../estilos/profile.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MainFeed } from "../MainPage/MainFeed";
import { NavBar } from "../NavBar/navbar";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router";
import "../../estilos/modalConfig.css";

export const Profile = () => {
  const { user: currentUser } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [postCount, setPostCount] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showModal, setShowModal] = useState(false); // Para mostrar/ocultar el modal
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    descr: "",
    city: "",
    country: "",
    itsPrivate: false, // Nuevo campo para manejar el estado privado
  });

  const Username = useParams().username;
  const PF = "/";

  // Obtener post count
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

  // Obtener perfil
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
          itsPrivate: response.data.itsPrivate || false, // Inicializar con el valor actual
        });

        if (currentUser.followings?.includes(response.data._id)) {
          setIsFollowing(true);
        }
      } catch (error) {
        console.error("Error al obtener el perfil:", error);
      }
    };
    fetchUser();
  }, [Username, currentUser]);

  // Manejar el cambio de inputs en el modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el cambio del switch
  const handleSwitchChange = (e) => {
    setFormData({ ...formData, itsPrivate: e.target.checked });
  };

  // Actualizar datos del usuario
  const handleUpdate = async () => {
    try {
      const updateData = {
        userId: currentUser._id, // ID del usuario autenticado
        ...formData,
      };

      await axios.put(`/api/users/${currentUser._id}`, updateData);
      setShowModal(false);
      setUser((prev) => ({ ...prev, ...formData })); // Actualizar estado local
    } catch (error) {
      console.error("Error al actualizar los datos:", error);
      alert("Error al actualizar los datos.");
    }
  };

  const renderProfileContent = () => {
    if(currentUser.username === Username){
      return <MainFeed username={Username} />;
    }
    
    if (formData.itsPrivate && !isFollowing) {
      return <div>Este perfil es privado. Debes seguir a esta persona para ver su contenido.</div>;
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
              <div>
                <br />
              <span><strong>Pais: </strong></span>
              <span className="profileInfoDesc">{user.country}</span>
              <span style={{padding:5}}></span>
              <span><strong>Ciudad: </strong></span>
              <span className="profileInfoDesc">{user.city}</span>
              </div>
              <br />
              {currentUser.username === Username && (
                <button className="configButton" onClick={() => {
                  setShowModal(true);
                } }><i className="bi bi-gear-fill"></i></button>
              )}
            </div>
          </div>
          {renderProfileContent()}
        </div>
      </div>

      {/* Modal de configuraciones */}
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
                <textarea
                  id="descr"
                  name="descr"
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
                <label htmlFor="itsPrivate">Perfil privado</label>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="itsPrivate"
                    checked={formData.itsPrivate}
                    onChange={handleSwitchChange}
                  />
                  <label className="form-check-label" htmlFor="itsPrivate">
                    {formData.itsPrivate ? "Privado" : "Público"}
                  </label>
                </div>
              </div>
              <div className="ButtonWrapper">
                <button type="button" onClick={handleUpdate}>
                  Actualizar
                </button>
                <button type="button" onClick={() => setShowModal(false)}>
                  Cerrar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}