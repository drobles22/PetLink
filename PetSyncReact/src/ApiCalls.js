import axios from "axios"

export const loginCall = async (Ucredential,dispatch) =>{

    dispatch({type: "LoginStart"})
    try{
        const response = await axios.post("auth/login", Ucredential)
        dispatch({type:"LoginSuccess", res: response.data})

    }catch(err){
    
        dispatch({type:"LoginFail", res:err})
    }

}