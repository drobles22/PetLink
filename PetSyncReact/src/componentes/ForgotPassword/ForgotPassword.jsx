import "../../estilos/ForgotPassword.css";
import { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8800/api/auth/forgot-password", {
        email,
      });

      setMessage(response.data.message); 
    } catch (err) {
      setError("Hubo un error. Verifique su correo o intente más tarde."+err);
    }
  };

  return (
    <div>
      <h2>Olvidé mi contraseña</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          placeholder="Ingrese su correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar enlace de reinicio</button>
      </form>

      {message && <div>{message}</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default ForgotPassword;