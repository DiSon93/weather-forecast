// a library to wrap and simplify api calls
import axios from "axios";
import qs from "querystringify";
import CookiesService from "./CookiesService";
import { APIType } from "./typings/Api";

// our "constructor"
export const Create = (
  baseURL = process.env.API_URL,
) => {
  const api = axios.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    // 10 second timeout...
    timeout: 20000,
  });


  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //

  const GET = (payload: any) =>
    api.get(`${payload?.path}?${qs.stringify(payload?.params)}`, {
      headers: {
        Authorization: "Bearer " + CookiesService.getClientCookies("token"),
      },
    });

  const POST = (payload: any) =>
    api.post(`${payload?.path}`, payload?.params, {
      headers: {
        Authorization: "Bearer " + CookiesService.getClientCookies("token"),
      },
    });

  const PUT = (payload: any) =>
    api.put(payload?.path, payload?.params, {
      headers: {
        Authorization: "Bearer " + CookiesService.getClientCookies("token"),
      },
    });

  const DELETE = (payload: any) =>
    api.delete(`${payload?.path}?${qs.stringify(payload?.params)}`, {
      headers: {
        Authorization: "Bearer " + CookiesService.getClientCookies("token"),
      },
    });

  // Get Weather Detail
  const getWeatherDetail = (payload: any) =>
  api.post(`current.json?key=${process.env.WEATHER_API_KEY}&q=Hanoi&aqi=no`, payload, {
    headers: {
      Authorization: "Bearer " + CookiesService.getClientCookies("token"),
    },
  });

    // Get Weather Forcast
    const getWeatherForecast = (payload: any) =>
    api.post(`forecast.json?key=${process.env.WEATHER_API_KEY}&q=Hanoi&days=1&aqi=no&alerts=no`, payload, {
      headers: {
        Authorization: "Bearer " + CookiesService.getClientCookies("token"),
      },
    });


  return {
    GET,
    POST,
    PUT,
    DELETE,
    // exports - Never deleting this line

    getWeatherDetail,
    getWeatherForecast
  };
};

// let's return back our create method as the default.
const API: APIType = Create();

export default API;
