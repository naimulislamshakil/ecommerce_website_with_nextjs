import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { productReducer } from "./Reducers/productReducer";

export const store = createStore(
  productReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
