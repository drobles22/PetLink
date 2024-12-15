import { useContext } from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import Home from './componentes/Home/Home';
import { Profile } from './componentes/ProfilePage/Profile';
import Login from "./componentes/LoginPage/Login";
import './App.css';
import "./estilos/stylesheetMainFeed.css";
import './index.css';
import 'bootswatch/dist/zephyr/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./estilos/navbar.css";
import '../src/estilos/stylesheetMainFeed.css';
import { AuthContext, AuthContextProvider } from './context/AuthContext';
import Register from './componentes/RegisterPage/Register';

function App() {
  return (
    <AuthContextProvider> {/* Asegúrate de envolver tu aplicación con el AuthContextProvider */}
      <div className="homeContainer">
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<AuthContent />} />
          {/* Ruta del perfil */}
          <Route path="/profile/:username" element={<Profile />} />
          {/* Ruta de login, solo si el usuario no está autenticado */}
          <Route 
            path="/login" 
            element={ <Login/> }
          />
          {/* Ruta de register, solo si el usuario no está autenticado */}
          <Route 
            path="/register" 
            element={ <Register/> }
          />
        </Routes>
      </div>
    </AuthContextProvider>
    
  );
}

// Componente que maneja el contenido basado en la autenticación
function AuthContent() {
  const { user } = useContext(AuthContext); // Accede al contexto para obtener el estado del usuario
  
  return user ? <Home /> : <Register />; // Si el usuario está autenticado, renderiza Home, de lo contrario Register
}

// Componente para proteger las rutas de login y register
function AuthProtectedRoute() {
  const { user } = useContext(AuthContext); // Accede al contexto para verificar el estado del usuario
  
  // Si el usuario ya está autenticado, redirige al home, si no, muestra el login o register
  return user ? <Navigate to="/" /> : <Login />; // Puedes cambiar <Login /> por <Register /> dependiendo de la ruta
}

export default App;