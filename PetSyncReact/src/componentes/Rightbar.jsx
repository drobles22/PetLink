import "../estilos/rightbar.css";
import Online from "../componentes/Online";


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
          <div className="rightbarFollowing">
            <img
              src="../../public/testAssest/Person/person1.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="../../public/testAssest/Person/person2.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Daniel Vet </span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="../../public/testAssest/Person/person3.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Valeria F. </span>
          </div>
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
