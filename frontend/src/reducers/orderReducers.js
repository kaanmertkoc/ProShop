import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
} from '../constants/orderConstants';

export const orderCreateReducer = (state = {}, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        orders: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};