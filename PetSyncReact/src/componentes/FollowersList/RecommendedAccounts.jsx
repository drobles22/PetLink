import PropTypes from 'prop-types';
import "../../estilos/RecommendedAccounts.css";

const recommendedAccounts = [
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

export const RecommendedAccountsList = () => {
  return (
    <div className="recommended-accounts-list">
      <h2>Cuentas recomendadas</h2>
      <hr className="title-divider" />
      <ul>
        {recommendedAccounts.map((account, index) => (
          <li key={index} className="account-item">
            <img
              src={account.avatar}
              alt={`${account.name} avatar`}
              className="account-avatar"
            />
            <div className="account-info">
              <div>{account.name}</div>
              <div>{account.username}</div>
            </div>
            <div className="account-actions">
              <button className="follow-button">Seguir</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="ver-mas-button">ver mas</button>
    </div>
  );
};

RecommendedAccountsList.propTypes = {
  recommendedAccounts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};