import { Dispatch } from "react";
import { Action } from "..";
import ActionType from "../Action-type";
import axios from "axios";
import Product from "../../../models/productModels";

const getProduct = async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: ActionType.GET_PRODUCT_REQUEST,
    });
    const { data } = await axios.get<Product[]>(
      "http://localhost:5000/allproduct"
    );

    dispatch({
      type: ActionType.GET_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: ActionType.GET_PRODUCT_FAILED,
      payload: error.message,
    });
  }
};
