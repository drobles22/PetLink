import axios from "axios";


export const loginCall = async (Ucredentials, dispatch) => {
    dispatch({ type: "LoginStart" });
    try {
      const response = await axios.post("/api/auth/login", Ucredentials);
      console.log("Login Response:", response.data); 
      dispatch({ type: "LoginSuccess", res: response.data });
    } catch (err) {
      console.error("Login Error:", err);
      dispatch({ type: "LoginFail", res: err });
    }
  };