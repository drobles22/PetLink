import PropTypes from 'prop-types';
import "../../estilos/FollowerList.css";


const followers = [
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
  
  export const FollowersList = () => {
    return (
      <div className="followers-list">
        <h2>Seguidores</h2>
        <hr className="title-divider" />
        <ul>
          {followers.map((follower, index) => (
            <li key={index} className="follower-item">
              <img
                src={follower.avatar}
                alt={`${follower.name} avatar`}
                className="follower-avatar"
              />
              <div>
                <div>{follower.name}</div>
                <div>{follower.username}</div>
              </div>
            </li>
          ))}
        </ul>
        <button className="ver-mas-button">ver mas</button>
      </div>
    );
  };

FollowersList.propTypes = {
  followers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};