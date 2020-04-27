import * as types from "../actions/actionTypes";
import _ from "lodash";

const initialState = {
  deviceType: 0,
  manufacturer: "",
  manufacturerFilter: "",
  model: "",
  step: 0
};

const orderReducer = function(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_DEVICE_TYPE:
      //При изменении типа девайса сбрасываем все данные об устройстве
      return Object.assign({}, state, {
        deviceType: action.deviceType,
        manufacturer: "",
        model: ""
      });

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
      const nextStep = state.step + 1;
      return Object.assign({}, state, {
        step: nextStep
      });
    case types.PREV_ORDER_STEP:
      const prevStep = state.step - 1;
      return Object.assign({}, state, {
        step: prevStep
      });
    case types.CHANGE_MODEL:
      return Object.assign({}, state, { model: action.model });
    default:
      return state;
  }
};

export default orderReducer;
