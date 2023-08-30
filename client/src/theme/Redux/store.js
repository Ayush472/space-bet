import { applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { legacy_createStore as createStore } from 'redux';

const middleware = [thunk];

export const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(...middleware)),
    );
