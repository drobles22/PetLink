import "../estilos/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Atajos</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/profile">Perfil</a></li>
            <li><a href="/friends">Amigos</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Siguenos</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 PetSync. Derechos Reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;