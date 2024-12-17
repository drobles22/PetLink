import "../../estilos/share.css";
import { useState } from "react";
import axios from "axios";

export const Share = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("desc", document.getElementById("exampleTextarea").value);
    if (file) {
      data.append("file", file);
    }

    try {
      const res = await axios.post("http://localhost:8800/", data);
      console.log("Post creado:", res.data);
      window.location.reload();
    } catch (err) {
      console.error("Error creando post", err);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile)); 
  };

  return (
    <>
      <div className="wrap">
        <form onSubmit={submitHandler}>
          <div className="contTop">
            <textarea
              placeholder="Cuéntanos sobre las últimas noticias de tu mascota!"
              className="form-control input_NewPost"
              id="exampleTextarea"
              rows="3"
            ></textarea>
          </div>
          {preview && (
            <div className="imagePreview">
              <img src={preview} alt="Preview" style={{ width: "300px", height: "200px", objectFit: "cover" }} />
            </div>
          )}
          <hr />
          <div className="contBottom">
            <div className="NewPostOptions">
              <label htmlFor="file" className="newPostOp">
                <i className="bi bi-card-image"></i>
                <span className="OptionText">Image</span>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  accept=".png,.jpeg,.jpg"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <button className="btn btn-warning shareButton" type="submit">
              Subir <i style={{ marginLeft: "5px" }} className="bi bi-arrow-right"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

