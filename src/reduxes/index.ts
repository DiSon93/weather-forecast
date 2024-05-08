import { combineReducers, Reducer } from "redux";
import { persistReducer } from "redux-persist";
import configureStore from "./CreateStore";
import rootSaga from "../sagas/index";
import ReduxPersist from "../configs/ReduxPersist";

/* ------------- Assemble The Reducers ------------- */
// prettier-ignore
export const reducers = combineReducers({
  weather: require("./WeatherRedux.ts").reducer as Reducer<any>,
});

export type RootState = ReturnType<typeof reducers>;

const store = () => {
  let finalReducers: any = reducers;
  // Redux persist
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }

  let { store } = configureStore(finalReducers, rootSaga);
  return store;
};

export default store;
