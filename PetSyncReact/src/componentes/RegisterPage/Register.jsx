import "../../estilos/Register.css";
import { useRef, useState } from "react";
import { auth } from "../config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [usernameG, setUsername] = useState("");
  const [nameG, setnameG] = useState("");
  const [emailG, setEmail] = useState("");
  const [passwordG, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");


   const username = useRef()
   const name = useRef()
   const email = useRef()
   const password = useRef()
   const passwordReConfirm = useRef()
   const navigate = useNavigate()

   const handleForm = async (i) => {
       i.preventDefault();
       if(passwordReConfirm.current.value != password.current.value){
        passwordReConfirm.current.setCustomValidity("Contraseñas no son iguales")
       }else{
        const user = {

          username:username.current.value,
          name:name.current.value,
          email:email.current.value,
          password:password.current.value,

        }
        try{
          await axios.post("/api/auth/register",user)
          navigate("/login")
          


        }catch(err){
          console.log(err)
        }
       }

     };




  const handleRegister = async () => {
    if (passwordG !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, emailG, passwordG,nameG);
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
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
