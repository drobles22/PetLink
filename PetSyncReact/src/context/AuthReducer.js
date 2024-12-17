

const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LoginStart":
        return {
          ...state,
          user: null,
          isFetching: true,
          error: false,
        };
      case "LoginSuccess":
        return {
          ...state,
          user: action.res, // Asegúrate de que el payload sea correcto
          isFetching: false,
          error: false,
        };
      case "LoginFail":
        return {
          ...state,
          user: null,
          isFetching: false,
          error: true,
        };
      default:
        return state;
    }
  };
  
  export default AuthReducer;