import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// this is the store initlialization part
const store = createStore(
  rootReducers,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
