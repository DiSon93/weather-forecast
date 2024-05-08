import { } from "lodash";
import { call, put } from "redux-saga/effects"
import { AxiosResponse, AxiosError } from "axios";
import { getAction } from "@/lib/fadux/index";
import { Action } from "@/reduxes/typings/Redux";
import CookiesService from "@/services/CookiesService";
import { APIType } from "@/services/typings/Api";
import { checkOK, handleErrors } from "./Handlers"

// Get current Weather
export function* getWeatherDetail(api: APIType, action: Action) {
    const { payload } = action;
    try {
        const response: AxiosResponse = yield call(api.getWeatherDetail, payload);
        console.log("responseaaaaa?.data", response?.data);

        // make the call to the api
        if (checkOK(response)) {
            // toast("Loading .....")
            yield put(getAction("getWeatherDetail", "succeed")({ response: response?.data }));
        } else {
            yield put(getAction("getWeatherDetail", "failed")({ error: response.data }));
        }
    } catch (error: Error | AxiosError | any) {
        yield* handleErrors({
            actionName: "getWeatherDetail",
            payload: payload,
            error: error
        })
    }
}

// Get Weather Forecast
export function* getWeatherForecast(api: APIType, action: Action) {
    const { payload } = action;
    try {
        const response: AxiosResponse = yield call(api.getWeatherForecast, payload);
        console.log("my-forecast: ", response?.data);
        // make the call to the api
        if (checkOK(response)) {
            // toast("Loading .....")
            yield put(getAction("getWeatherForecast", "succeed")({ response: response?.data }));
        } else {
            yield put(getAction("getWeatherForecast", "failed")({ error: response.data }));
        }
    } catch (error: Error | AxiosError | any) {
        yield* handleErrors({
            actionName: "getWeatherForecast",
            payload: payload,
            error: error
        })
    }
}