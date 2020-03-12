import * as types from "../actions/actionTypes";
import _ from "lodash";

const initialState = {
  deviceType: 0,
  manufacturer: "",
  manufacturerFilter: "",
  step: 0
};

const orderReducer = function(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_DEVICE_TYPE:
      return Object.assign({}, state, { deviceType: action.deviceType });

    case types.CHANGE_MANUFACTURER:
      return Object.assign({}, state, { manufacturer: action.manufacturer });

    case types.CHANGE_MANUFACTURER_FILTER:
      return Object.assign({}, state, {
        manufacturerFilter: action.manufacturer
      });

    case types.CHANGE_ORDER_STEP:
      return Object.assign({}, state, {
        step: action.step
      });
    case types.NEXT_ORDER_STEP:
      const nextStep = state.step++;
      return Object.assign({}, state, {
        step: nextStep
      });
    default:
      return state;
  }
};

export default orderReducer;
