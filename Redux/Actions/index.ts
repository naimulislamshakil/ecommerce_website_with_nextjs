import { type } from "os";
import Product from "../../models/productModels";
import ActionType from "./Action-type";

interface GetProductRequestAction {
  type: ActionType.GET_PRODUCT_REQUEST;
}

interface GetProductSuccessAction {
  type: ActionType.GET_PRODUCT_SUCCESS;
  payload: Product[];
}

interface GetProductFailedAction {
  type: ActionType.GET_PRODUCT_FAILED;
  payload: string;
}

export type Action =
  | GetProductFailedAction
  | GetProductRequestAction
  | GetProductSuccessAction;
