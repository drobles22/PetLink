import "../../estilos/Register.css";
import { useState } from "react";
import { auth } from "../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User created:", user);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error creating user:", error.message);
      setError(error.message);
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
          <div className="loginBox">
            {error && <p className="error">{error}</p>}
            <input
              type="text"
              placeholder="Username"
              className="loginInput"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password Again"
              className="loginInput"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="loginButton" onClick={handleRegister}>
              Sign Up
            </button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
