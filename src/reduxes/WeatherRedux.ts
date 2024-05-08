import _ from "lodash";
import { createReducer, API } from "@/lib/fadux";
/**
 * Initital state
 */

const INITIAL_STATE = {};
/**
 * Create Authentication reducer
 */

const reducer = createReducer(
  {
    ...API({
      getWeatherDetail: {
        payload: ["id"],
      },
      getWeatherForecast: {
        payload: ["id"],
      }
    }),
  },
  INITIAL_STATE
);
export { reducer };
