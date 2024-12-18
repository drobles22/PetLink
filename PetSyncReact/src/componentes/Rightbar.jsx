import "../estilos/rightbar.css";
import Online from "../componentes/Online";
import { FollowersList } from "./FollowersList/FollowersList";
import { AuthContext } from "../context/AuthContext";

export default function Rightbar() {


  const HomeRightbar = () => {
    const { Users } = useContext(AuthContext); 

    return (
      <>
        <h4 className="rightbarTitle">Amigos</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>

        <div className="rightbarFollowings">
          {<FollowersList/>}
        </div>
      </>
    );
  };
  
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <HomeRightbar />
      </div>
    </div>
  );
}
