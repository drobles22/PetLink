import { Route, Routes} from "react-router-dom"
import { NotFound } from "./NotFound"
import { Profiler } from "./ProfilePage/Profile"
import { MainFeed } from "./MainPage/MainFeed"
import { Register } from "./RegisterPage/Register"
import { ForgotPass } from "./ForgotPassword/ForgotPassword"
import { FollowersList } from "./FollowersList/FollowersList"
import { PendingRequestsList } from "./FollowersList/PendingRequestList"
import { RecommendedAccounts } from "./FollowersList/RecommendedAccounts"

export const RouterApp = () => {
     

    return (
    
    
    <>


        <Routes>
            <Route path="/" Component={ Home }></Route>
            <Route path="/home" Component={ Home }></Route>
            <Route path="*" Component={ NotFound }></Route>
            <Route path="/Profiler" Component={ Profiler }></Route>
            <Route path="/main" Component={ MainFeed }></Route>
            <Route path="/Register" Component={ Register }></Route>
            <Route path="/ForgotPass" Component={ ForgotPass }></Route>
            <Route path="/FollowersList" Component={ FollowersList }></Route>
            <Route path="/PendingRequestsList" Component={ PendingRequestsList }></Route>
            <Route path="/RecommendedAccounts" Component={ RecommendedAccounts }></Route>
        </Routes> 
    </>
  )

}
