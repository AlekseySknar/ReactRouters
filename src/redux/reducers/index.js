import { combineReducers } from "redux";

//Импортируем редусеры и собираем в один
import orderReducer from "./orderReducer";
import sourcesReducer from "./sourcesReducer";

var reducers = combineReducers({
  orderState: orderReducer,
  sourcesReducer: sourcesReducer
});

export default reducers;
