import { combineReducers } from "redux-immutable";
import { reducer as recommend } from "../pages/Discover/c_pages/recommend/store";
import { reducer as player } from "../pages/Player/store";
const YNReducer = combineReducers({
  recommend,
  player,
});
export default YNReducer;
