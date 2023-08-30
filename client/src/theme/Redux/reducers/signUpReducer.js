const user = JSON.parse(localStorage.getItem('Register'));

const initialState =  user ? {
    user: user,                       
    message: 'Register Successfully'
} : {
  user: null,
  message: 'Register Fail'
}

 function signUpReducer(state = initialState, action) {
  const { type, payload } = action;

  // console.log('Type is ===>', type)
  // console.log('Payload is ===>', payload)

  switch (type) {
    case "USER_SIGNUP":
      return {
        ...state,
        user: payload,
        message: 'Register Successfully'
    };
    case "SIGNUP_FAIL":
      return {
        ...state,
        user: null,
        message: payload
    };
    // case "USER_LOGOUT":
    //   return{
    //     ...state,
    //     user:payload,
    //     message:"User Logout Successfully"
    //   }
    default:
      return state;
  }
}

export default signUpReducer;
