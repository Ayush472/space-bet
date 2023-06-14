import { USER_DETAILS,LOGIN_FAIL } from "../action/type";
const user = JSON.parse(localStorage.getItem('userData'));

const initialState =  user ? {
    user: user,                       
    message: 'Login Success'
} : {
  user: null,
  message: 'Login Fail'
}

 function userReducer(state = initialState, action) {
  const { type, payload } = action;

  // console.log('Type is ===>', type)
  // console.log('Payload is ===>', payload)

  switch (type) {
    case USER_DETAILS:
      return {
        ...state,
        user: payload,
        message: 'Login Success'
    };
    case LOGIN_FAIL:
      return {
        ...state,
        user: null,
        message: payload
    };
    default:
      return state;
  }
}

export default userReducer;
