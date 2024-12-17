import { MainFeed } from "../MainPage/MainFeed";
import { NavBar } from "../NavBar/navbar";
import "../../estilos/stylesheetMainFeed.css"
import { FeedDivisors } from "../MainPage/FeedDivisors";

export default function Home() {
  return (
    <>
    <NavBar></NavBar>
      <div className="homeContainer">
        {/*<Sidebar />*/}
        <FeedDivisors></FeedDivisors>
        <MainFeed></MainFeed>
        {/*<Rightbar/>*/}
      </div>
    </>
  );
}