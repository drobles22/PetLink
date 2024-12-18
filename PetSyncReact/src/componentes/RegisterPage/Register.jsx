import "../../estilos/Register.css";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [usernameG, setUsername] = useState("");
  const [nameG, setnameG] = useState("");
  const [emailG, setEmail] = useState("");
  const [passwordG, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const username = useRef();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const passwordReConfirm = useRef();
  const navigate = useNavigate();

  const handleForm = async (i) => {
    i.preventDefault();
    if (passwordReConfirm.current.value !== password.current.value) {
      passwordReConfirm.current.setCustomValidity("Contraseñas no son iguales");
    } else {
      passwordReConfirm.current.setCustomValidity(""); // Clear the custom validity message
      const user = {
        username: username.current.value,
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/api/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.error("Error during registration:", err);
        setError("Failed to register. Please try again.");
      }
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login"); // Navigate to the login page
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password.current.value) {
      passwordReConfirm.current.setCustomValidity("Contraseñas no son iguales");
    } else {
      passwordReConfirm.current.setCustomValidity(""); // Clear the custom validity message
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">PetSync</h3>
          <span className="loginDesc">
            Conecta con aquellos amigos peludos al rededor del mundo!!
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleForm}>
            {error && <p className="error">{error}</p>}
            <input
              type="text"
              placeholder="Nombre de usuario"
              className="loginInput"
              required
              ref={username}
              value={usernameG}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nombre"
              className="loginInput"
              required
              ref={name}
              value={nameG}
              onChange={(e) => setnameG(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              required
              ref={email}
              value={emailG}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="loginInput"
              required
              ref={password}
              value={passwordG}
              minLength={"6"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Repetir contraseña"
              className="loginInput"
              required
              ref={passwordReConfirm}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button
              className="loginRegisterBtn"
              type="button"
              onClick={handleLoginRedirect}
            >
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}