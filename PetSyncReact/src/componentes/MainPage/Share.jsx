import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import "../../estilos/share.css";

export const Share = () => {
  const { user } = useContext(AuthContext);
  const PF = import.meta.env.VITE_PUBLIC_FOLDER || "/";
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    // Crear el nuevo post
    const newPost = {
      userId: user._id,
      postdesc: desc.current.value,
    };

    // Subida del archivo (imagen)
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.attachment = "/images/" + fileName;

      try {
        // Subir el archivo al servidor
        await axios.post("/api/upload", data);
      } catch (err) {
        console.error("Error al subir el archivo:", err);
        return;
      }
    }

    // Crear el post en la base de datos
    try {
      await axios.post("/api/posts", newPost);
      window.location.reload(); // Recargar la página
    } catch (err) {
      console.error("Error al crear el post:", err);
    }
  };

  return (
    <div className="container containerShare">
      <div className="wrap">
        <div className="contTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt="profile"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
          <input
            placeholder={`¿Qué estás pensando, ${user.username}?`}
            className="shareInput"
            ref={desc}
          />
        </div>

        {/* Vista previa de la imagen */}
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="preview" />
            <i
              className="bi bi-x-circle-fill shareCancelImg"
              onClick={() => setFile(null)}
            ></i>
          </div>
        )}

        <hr />
        <form className="contBottom" onSubmit={submitHandler}>
          <div className="NewPostOptions">
            {/* Input para seleccionar un archivo */}
            <label htmlFor="file" className="newPostOp">
              <i className="bi bi-card-image shareIcon" style={{ color: "tomato" }}></i>
              <span className="OptionText">Imagen/Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
          {/* Botón para subir el post */}
          <button className="btn btn-warning shareButton" type="submit">
            Subir <i className="bi bi-arrow-right" style={{ marginLeft: "5px" }}></i>
          </button>
        </form>
      </div>
    </div>
  );
};


