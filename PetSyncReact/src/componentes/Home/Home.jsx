import { MainFeed } from "../MainPage/MainFeed";
import { NavBar } from "../NavBar/navbar";
import Sidebar from "../Sidebar";
import Rightbar from "../Rightbar";
import "../../estilos/homeContainer.css";

export default function Home() {
  return (
    <div className="homeContainer">
      <Sidebar />
      <div className="mainContent">
        <NavBar />
        <MainFeed />
      </div>
      <Rightbar />
    </div>
  );
}