import { createStore, applyMiddleware, combineReducers } from "redux";
import Counter from "./modules/counter";

const createStoreWithMiddleware = applyMiddleware()(createStore);

const reducer = combineReducers({
  Counter
});

const configureStore = initialState =>
  createStoreWithMiddleware(reducer, initialState);

export default configureStore;
