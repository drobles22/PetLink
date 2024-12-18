import { Home } from "./Home/Home";
import { Login } from "./LoginPage/Login";
import { Profile } from "./ProfilePage/Profile";
import { Register } from "./RegisterPage/Register";
import { NotFoud } from "./NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {
    const { user } = useContext(AuthContext);
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/profile/:username">
            <Profile />
          </Route>
        </Switch>

        <Route path="*" Component={ NotFoud } />
        
      </Router>
    );
  }

export const RouterApp = () => {
    return App
}



