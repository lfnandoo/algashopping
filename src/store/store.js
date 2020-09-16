import { createStore, combineReducers } from "redux";
import productsReducer from "./Products/Products.reducer";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

export default store;
