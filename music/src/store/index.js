import { applyMiddleware, compose, createStore } from "redux";
import YNReducer from "./reducer";
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(YNReducer, composeEnhancers(
    applyMiddleware(thunk)
));
export default store;