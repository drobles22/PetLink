import "../estilos/rightbar.css";
import Online from "../componentes/Online";
import { FollowersList } from "./FollowersList/FollowersList";


export default function Rightbar() {


  const HomeRightbar = () => {
    return (
      <>
      
        <div className="birthdayContainer">
          <img className="birthdayImg" src="../../public/testAssest/Person/person1.jpg" alt="" />
          <span className="birthdayText">
            <b>Carlos Foster</b> y <b>Otros 3 amigos</b> Cumplen años hoy.
          </span>
        </div>

        <h4 className="rightbarTitle">Amigos Conectados</h4>
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

  const ProfileRightbar = () => {
    return (
      <>
      </>
    );
  };
  
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
