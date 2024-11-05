import PropTypes from 'prop-types';
import "../../estilos/PendingRequest.css";

const pendingRequests = [
  {
    name: 'Tequila Lifes',
    username: '@dogtequila_dbd',
    avatar: '/public/testAssest/Person/person1.jpg',
  },
  {
    name: 'Valeria F. - OlimpoShelter',
    username: '@Valefont_03',
    avatar: '/public/testAssest/Person/person2.jpg',
  },
  {
    name: 'Pame - DoggyFits Ceo',
    username: '@doggy_pame',
    avatar: '/public/testAssest/Person/person3.jpg',
  },
  {
    name: 'Daniel “Vet” Martinez',
    username: '@salortwift',
    avatar: '/public/testAssest/Person/person4.jpg',
  },
];

export const PendingRequestsList = () => {
  return (
    <div className="pending-requests-list">
      <h2>Solicitudes de seguimiento</h2>
      <hr className="title-divider" />
      <ul>
        {pendingRequests.map((request, index) => (
          <li key={index} className="request-item">
            <img
              src={request.avatar}
              alt={`${request.name} avatar`}
              className="request-avatar"
            />
            <div className="request-info">
              <div>{request.name}</div>
              <div>{request.username}</div>
            </div>
            <div className="request-actions">
              <button className="confirm-button">Confirmar</button>
              <button className="delete-button">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="ver-mas-button">ver mas</button>
    </div>
  );
};

PendingRequestsList.propTypes = {
  pendingRequests: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};