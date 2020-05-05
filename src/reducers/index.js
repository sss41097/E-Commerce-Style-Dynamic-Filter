import { combineReducers } from "redux";
import productReducers from "./productReducers";

// a simple redux reducer combining step
// though we have one reducer, so their was no need of it
export default combineReducers({
  products: productReducers,
});
