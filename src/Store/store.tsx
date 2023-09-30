import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../Services/cryptoApis";
import { cryptoNewsApi } from "../Services/newsApis";
// import logger from "redux-logger";

const rootReducer = combineReducers({
  [cryptoApi.reducerPath]: cryptoApi.reducer,
  [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cryptoApi.middleware)
      .concat(cryptoNewsApi.middleware),
});

export default store;
