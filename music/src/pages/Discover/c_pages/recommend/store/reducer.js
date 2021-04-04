import * as actionTypes from "./constant";
import { Map } from "immutable";
const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  upRanking: {},
  newRanking: {},
  originRanking: {},
  hotRanking: {},
  // ktvRanking: {},
  // usaRanking: {},
});

function YNRecommendReducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);
    case actionTypes.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking);
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking);
    case actionTypes.CHANGE_HOT_RANKING:
      return state.set("hotRanking", action.hotRanking);
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking);
    // case actionTypes.CHANGE_USA_RANKING:
    //   return state.set("originRanking", action.usaRanking);
    // case actionTypes.CHANGE_KTV_RANKING:
    //   return state.set("originRanking", action.ktvRanking);
    default:
      return state;
  }
}
export default YNRecommendReducer;
