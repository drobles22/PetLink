import "../../estilos/ForgotPassword.css";
import "../../estilos/Login.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();  


  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8800/api/auth/forgotPassword", {
        email,
      });
      setMessage(response.data.message); 
    } catch (err) {
      setError("Hubo un error. Verifique su correo o intente más tarde.");
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">PetSync</h3>
          <span className="loginDesc">
            Conecta con aquellos amigos peludos alrededor del mundo!!
          </span>
        </div>
        <form className="loginRight" onSubmit={handleResetPassword}>
          <div className="loginBox">
            {error && <p className="error">{error}</p>}
            {message && <p className="message">{message}</p>}
            
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="loginButton" type="submit">
              Enviar enlace de reinicio
            </button>
            
            <button className="loginRegisterBtn" type="button" onClick={() => navigate("/login")}>
              Regresar al Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;