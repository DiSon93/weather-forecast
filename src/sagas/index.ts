import { all, takeEvery, takeLatest } from "redux-saga/effects";
import { getActionName } from "../lib/fadux";
import api from "../services/Api";
/* ------------- Import Sagas ------------- */

/*import saga - Never deleting this line*/

import { getWeatherDetail, getWeatherForecast } from "./WeatherSaga";

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    /*Lấy dữ liệu mẫu*/
    takeLatest(getActionName("getWeatherDetail"), getWeatherDetail, api),
    takeLatest(getActionName("getWeatherForecast"), getWeatherForecast, api),
  ])
}