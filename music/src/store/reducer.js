import { combineReducers } from "redux-immutable";
import { reducer as recommend } from "../pages/Discover/c_pages/recommend/store";
const YNReducer = combineReducers({
  recommend, 
});
export default YNReducer;
