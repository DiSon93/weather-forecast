import { createStore, applyMiddleware, compose, Reducer } from "redux";
import createSagaMiddleware from "redux-saga";
import { Saga } from "@redux-saga/types";
import logger from "redux-logger";
import { ReduxHelperService } from "../services/ReduxHelperService";
import { persistStore } from "redux-persist";
import { configureStore } from '@reduxjs/toolkit';

// creates the store
const store = (rootReducer: Reducer, rootSaga: Saga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = [];
  const enhancers = [];

  /* ------------- Redux Logger Middleware ------------ */
  middleware.push(logger);

  /* ------------- Navigation Middleware ------------ */

  /* ------------- Analytics Middleware ------------- */

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  /* ------------- Custom Middleware ------------- */

  const reduxHelperServiceMiddleware =
    ReduxHelperService.createReduxHelperServiceMiddleware();
  middleware.push(reduxHelperServiceMiddleware);

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, compose(...enhancers));
  console.log("store =>>>", store);
  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware,
  };
};

export default store;
