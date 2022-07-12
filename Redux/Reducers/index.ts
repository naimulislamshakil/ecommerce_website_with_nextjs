import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
  posts: productReducer,
});

export default reducers;
