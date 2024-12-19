import Home from "./Home/Home";
import Login from "./LoginPage/Login";
import Register from "./RegisterPage/Register";
import { Profile } from "./ProfilePage/Profile";
import { NotFoud } from "./NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

/**import { MainFeed } from "./MainPage/MainFeed";**/

function App() {
    const { user } = useContext(AuthContext);
    return (
      <Router>
        <Route path="*" Component={ NotFoud } />
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Register />}
          </Route>

          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>

          <Route path="/profile/:user">
            <Profile />
          </Route>
        </Switch>
      </Router>
    );
  }

export const RouterApp = () => {
    return App
}



