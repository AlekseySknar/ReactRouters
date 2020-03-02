import * as types from "./actionTypes";

export function createOrder(orderProp) {
  return {
    type: types.CREATE_ORDER,
    orderProp
  };
}

export function changeDeviceType(deviceType) {
  return {
    type: types.CHANGE_DEVICE_TYPE,
    deviceType
  };
}

export function changeManufacturer(manufacturer) {
  return {
    type: types.CHANGE_MANUFACTURERE,
    manufacturer
  };
}
