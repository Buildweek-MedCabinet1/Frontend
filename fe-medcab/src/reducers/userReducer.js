import UserActionTypes from '../actions/users/user.types'

const INITIAL_STATE = {
    currentUser: null,
    error: null
  };
  
  const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case UserActionTypes.LOG_IN_SUCCESS:
        return {
          ...state,
          currentUser: action.payload,
          error: null
        };
      case UserActionTypes.SIGN_OUT_SUCCESS:
        return {
          ...state,
          currentUser: null,
          error: null
        };
      case UserActionTypes.SIGN_UP_START:
          return{
            ...state,
            currentUser: action.payload
          }
      case UserActionTypes.LOG:
      case UserActionTypes.SIGN_OUT_FAILURE:
      case UserActionTypes.SIGN_UP_FAILURE:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };

  export default userReducer;