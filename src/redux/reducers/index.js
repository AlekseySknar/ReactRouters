import { combineReducers } from "redux";

//Импортируем редусеры и собираем в один
import orderReducer from "./orderReducer";

var reducers = combineReducers({
  orderState: orderReducer
});

export default reducers;
