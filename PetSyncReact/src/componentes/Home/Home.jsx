import { MainFeed } from "../MainPage/MainFeed";
import { NavBar } from "../NavBar/navbar";
import "../../estilos/stylesheetMainFeed.css"
import { FeedDivisors } from "../MainPage/FeedDivisors";

import { Sidebar } from "../../componentes/Sidebar"
import { Rightbar } from "../../componentes/Rightbar"
import { RouterApp } from "../RouterApp";
import { BrowserRouter as  Router} from "react-router-dom";

export default function Home() {
  return (
    <>
    <NavBar></NavBar>
      <Router>
        < RouterApp/>
      </Router>

      <div className="homeContainer">
        <Sidebar />
        <FeedDivisors></FeedDivisors>
        <MainFeed></MainFeed>
        <Rightbar/>
      </div>
    </>
  );
}