import * as types from "../actions/actionTypes";
import _ from "lodash";

const initialState = {
  manufacturers: []
};

const sourcesReducer = function(state = initialState, action) {
  switch (action.types) {
    case types.GET_MANUFACTURER_SUCCESS:
      return Object.assign({}, state, { manufacturers: action.manufacturers });
    default:
      return state;
  }
};

export default sourcesReducer;
