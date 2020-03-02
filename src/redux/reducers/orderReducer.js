import * as types from "../actions/actionTypes";
import _ from "lodash";

const initialState = {
  deviceType: 0,
  manufacturer: "",
  step: 1
};

const orderReducer = function(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_DEVICE_TYPE:
      return Object.assign({}, state, { deviceType: action.deviceType });

    case types.CHANGE_MANUFACTURER:
      return Object.assign({}, state, { manufacturer: action.manufacturer });

    default:
      return state;
  }
};

export default orderReducer;
