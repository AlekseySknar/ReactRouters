import axios from "axios";
import store from "../store";
import { getManufacturersSuccess } from "../redux/actions/actionsResurсes";

export function getManufacturers() {
  return axios
    .get("84.22.143.140/api/manufacruters")
    .then(Response => {
      store.dispatch(getManufacturersSuccess(Response.data));
      console.log("Данные загруженны" + Response.data);
      return Response;
    })
    .catch(err => {
      console.log("Ошибика:" + err);
    });
}
