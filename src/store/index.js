import { combineReducers, legacy_createStore as createStore } from "redux"
import ProductReducer from "./reducer/ProductsReducer";
// import { createStoreHook, combineReducers } from "react-redux";

const root = combineReducers({
    ProductReducer
});
// console.log(ProductReducer);

const store = createStore(root);
export default store;