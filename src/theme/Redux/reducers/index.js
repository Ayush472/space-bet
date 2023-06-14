import {combineReducers} from "redux"
import signUpReducer from "./signUpReducer";
import userReducer from "./userReducer";


const reducers = combineReducers({
    user: userReducer,
    signUp: signUpReducer,
})

export default reducers;