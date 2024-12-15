import "../../estilos/Login.css";
import { useState, useRef, useContext } from "react";
import { auth, provider } from "../../componentes/config/firebase-config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { loginCall } from "../../ApiCalls";
import {AuthContext} from "../../context/AuthContext"

export default function Login() {
  const [emailG, setEmail] = useState("");
  const [passwordG, setPassword] = useState("");
  const [err, setError] = useState("");
  const email = useRef()
  const password = useRef()

  const {user,isFetching,error,dispatch} = useContext(AuthContext)
  console.log("AuthContext values:", { user, isFetching, error, dispatch });


  const handleForm = (i) => {
    i.preventDefault();
    loginCall(
      { email:email.current.value, password: password.current.value },
      dispatch
    );
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailG, passwordG);
      const user = userCredential.user;
      console.log("Logged in user:", user);
      alert("Login successful!");
      // Redirigir a la página principal o dashboard
    } catch (err) {
      console.log("Error logging in:", err.message);
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
    } catch (err) {
      console.err("Error logging in with Google:", err.message);
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
        <form className="loginRight" onSubmit={handleForm}>
          <div className="loginBox">
            {err && <p className="error">{err}</p>}
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              value={emailG}
              ref={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              value={passwordG}
              required
              minLength={"6"}
              ref={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="loginButton" >
              {isFetching ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>:"Log in"}
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
        </form>
      </div>
    </div>
  );
}

