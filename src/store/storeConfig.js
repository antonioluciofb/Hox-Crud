import { createStore, combineReducers } from "redux";

import productsReducer from "./reducers/productsReducer";

const reducers = combineReducers({ stateProducts: productsReducer });

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;