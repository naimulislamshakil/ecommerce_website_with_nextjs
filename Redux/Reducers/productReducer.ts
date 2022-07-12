import Product from "../../models/productModels";
import { Action } from "../Actions";
import ActionType from "../Actions/Action-type";

interface productState {
  isLoading: boolean;
  error: string | null;
  product: Product[] | null;
}

const initialState = {
  isLoading: false,
  error: null,
  product: null,
};

export const productReducer = (
  state: productState = initialState,
  action: Action
): productState => {
  switch (action.type) {
    case ActionType.GET_PRODUCT_REQUEST:
      return {
        isLoading: true,
        error: null,
        product: null,
      };
    case ActionType.GET_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        error: null,
        product: action.payload,
      };
    case ActionType.GET_PRODUCT_FAILED:
      return {
        isLoading: false,
        error: action.payload,
        product: null,
      };

    default:
      return state;
  }
};
