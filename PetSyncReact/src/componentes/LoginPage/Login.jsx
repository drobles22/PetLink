import "../../estilos/Login.css";
import { useState } from "react";
import { auth, provider } from "../../componentes/config/firebase-config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Logged in user:", user);
      alert("Login successful!");
      // Redirigir a la página principal o dashboard
    } catch (error) {
      console.error("Error logging in:", error.message);
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google logged in user:", user);
      alert("Login with Google successful!");
      // Redirigir a la página principal o dashboard
    } catch (error) {
      console.error("Error logging in with Google:", error.message);
      setError("Failed to log in with Google. Please try again.");
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
            <button className="loginButton" onClick={handleLogin}>
              Log In
            </button>
            <button className="googleButton" onClick={handleGoogleLogin}>
              <img
                src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                alt="Google Icon"
              />
              Log In with Google
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

