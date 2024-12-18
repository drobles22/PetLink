import { Route, Routes} from "react-router-dom"
import { NotFoud } from "../componentes/NotFound"
import { Profile } from "../componentes/ProfilePage/Profile"
import { MainFeed } from "../componentes/MainPage/MainFeed"
import Register from "../componentes/RegisterPage/Register"
import ForgotPassword from "../componentes/ForgotPassword/ForgotPassword"
import { FollowersList } from "../FollowersList/FollowersList"
import { PendingRequestsList } from "../FollowersList/PendingRequestList"
import { RecommendedAccounts } from "../FollowersList/RecommendedAccounts"

export const RouterApp = () => {
     

    return (
    
    
    <>


        <Routes>
            <Route path="/" Component={ Home }></Route>
            <Route path="/home" Component={ Home }></Route>
            <Route path="*" Component={ NotFoud }></Route>
            <Route path="/Profiler" Component={ Profile }></Route>
            <Route path="/main" Component={ MainFeed }></Route>
            <Route path="/Register" Component={ Register }></Route>
            <Route path="/ForgotPass" Component={ ForgotPassword }></Route>
            <Route path="/FollowersList" Component={ FollowersList }></Route>
            <Route path="/PendingRequestsList" Component={ PendingRequestsList }></Route>
            <Route path="/RecommendedAccounts" Component={ RecommendedAccounts }></Route>
        </Routes> 
    </>
  )

}
