import { combineReducers, legacy_createStore as createStore } from "redux"
import ProductReducer from "./reducer/ProductsReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
import CartReducer from "./reducer/CartReducer";
// import { createStoreHook, combineReducers } from "react-redux";

const root = combineReducers({
    ProductReducer,
    CartReducer
});
// console.log(ProductReducer);

const store = createStore(root, devToolsEnhancer());
export default store;