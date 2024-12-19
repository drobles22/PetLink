import { MainFeed } from "../MainPage/MainFeed";
import { NavBar } from "../NavBar/navbar";
import "../../estilos/stylesheetMainFeed.css"
import { FeedDivisors } from "../MainPage/FeedDivisors";

import Sidebar from "../../componentes/Sidebar";
import { BrowserRouter as  Router} from "react-router-dom";

export default function Home() {
  return (
    <>      

    <NavBar></NavBar>


      <div className="homeContainer">
       {/*<Sidebar></Sidebar>*/} 
        
        <MainFeed></MainFeed>
      </div>
    </>
  );
}