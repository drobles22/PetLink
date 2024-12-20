import "../estilos/rightbar.css";
import { FollowersList } from "./FollowersList/FollowersList";



export default function Rightbar() {
  const HomeRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">Amigos</h4>


        <div className="rightbarFollowings">
          <FollowersList />
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