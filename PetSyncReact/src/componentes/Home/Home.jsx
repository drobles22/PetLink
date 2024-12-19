import { MainFeed } from "../MainPage/MainFeed";
import { NavBar } from "../NavBar/navbar";
import Sidebar from "../Sidebar";
import Rightbar from "../Rightbar";
// import Footer from "../Footer";
import "../../estilos/homeContainer.css";

export default function Home() {
  return (
    <div className="homeContainer">
      <NavBar />
      <div className="homeContent">
        <Sidebar />
        <div className="mainContent">
          <MainFeed />
        </div>
        <Rightbar />
      </div>
      {/* <Footer /> */}
    </div>
  );
}