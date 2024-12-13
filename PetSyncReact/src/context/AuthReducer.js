

const AuthReducer = (state,action)=>{

switch(action.type){

    case "LoginStart":
        return{
            user:null,
            isFetching:true,
            error:false,
        }
        case "LoginSuccess":
            return{
                user:action.res,
                isFetching:false,
                error:false,
            }

            case "LoginFail":
            return{
                user:null,
                isFetching:false,
                error:action.res,
            }

        default:
            return state
}

}

export default AuthReducer