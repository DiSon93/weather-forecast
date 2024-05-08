"use client";
import type { AppProps } from "next/app";
import React from "react";
import ReactDOM from "react-dom";
import Head from "next/head";
import Router from "next/router";
import { ThemeProvider } from "styled-components";
import mainTheme from "@/styles/theme/mainTheme";
import Layout from "@/layouts/default";
import "../styles/globals.css";
import { Provider } from "react-redux";
// import createStore from "redux";
// import { legacy_createStore as createStore } from 'redux';
import rootReducer, { reducers } from '../reduxes/index';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/index";
// export const store = createStore();
// import store from '@/reduxes'
let sagaMiddleware = createSagaMiddleware();
const store = configureStore({ 
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga);
const __PERSISTOR = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={__PERSISTOR}>
      {() => (
				<ThemeProvider theme={mainTheme}>
					<Head>
						<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
						<title>Weather Forecast</title>
					</Head>
					{/* <Layout> */}
					<Component {...pageProps} />
					{/* </Layout> */}
				</ThemeProvider>
      )}
			</PersistGate>
		</Provider>
	);
}
