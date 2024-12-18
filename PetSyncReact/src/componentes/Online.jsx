import "../estilos/online.css";
import { AuthContext } from "../context/AuthContext";

export default function Online({user}) {
  const { user } = useContext(AuthContext); 
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}
