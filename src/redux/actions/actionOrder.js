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
    type: types.CHANGE_MANUFACTURER,
    manufacturer
  };
}

export function changeManufacturerFilter(manufacturer) {
  return {
    type: types.CHANGE_MANUFACTURER_FILTER,
    manufacturer
  };
}

export function changeOrderStep(step) {
  return {
    type: types.CHANGE_ORDER_STEP,
    step
  };
}

export function nextOrderStep() {
  return {
    type: types.NEXT_ORDER_STEP
  };
}
