import * as types from "./actionTypes";

export function getManufacturersSuccess(manufacturers) {
  return {
    type: types.GET_MANUFACTURER_SUCCESS,
    manufacturers
  };
}
