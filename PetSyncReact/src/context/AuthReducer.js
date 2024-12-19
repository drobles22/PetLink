

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
          user: action.res,
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

        case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: [...state.user.followings, action.res],
        },
      };
    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (following) => following !== action.res
          ),
        }
      };
      default:
        return state;
    }
  };
  
  export default AuthReducer;