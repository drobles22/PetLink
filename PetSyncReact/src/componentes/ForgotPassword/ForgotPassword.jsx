import "../../estilos/ForgotPassword.css";
import { useState } from "react";
import { auth } from "../../componentes/config/firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Please check your inbox.");
      setError("");
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
      setError("Failed to send password reset email. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="forgotPassword">
      <div className="forgotPasswordWrapper">
        <h3 className="forgotPasswordTitle">Reset Your Password</h3>
        <p className="forgotPasswordDesc">
          Enter your email address below to receive a password reset link.
        </p>
        {message && <p className="successMessage">{message}</p>}
        {error && <p className="errorMessage">{error}</p>}
        <input
          type="email"
          placeholder="Enter your email"
          className="forgotPasswordInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="forgotPasswordButton"
          onClick={handleForgotPassword}
        >
          Send Reset Email
        </button>
      </div>
    </div>
  );
}