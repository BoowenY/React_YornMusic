import * as actionTypes from "./constant";
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbum,
  getTopList,
} from "../../../../../services/recommend";

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums,
});

const changeUpRanking = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
});

const changeNewRanking = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
});

const changeOriginRanking = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
});

const changeHotRanking = (res) => ({
  type: actionTypes.CHANGE_HOT_RANKING,
  hotRanking: res.playlist,
});

// const changeKTVRanking = (res) => ({
//   type: actionTypes.CHANGE_KTV_RANKING,
//   ktvRanking: res.playlist,
// });

// const changeUSARanking = (res) => ({
//   type: actionTypes.CHANGE_USA_RANKING,
//   usaRanking: res.playlist,
// });

export const getHotRecommendsAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};

export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbum(limit).then((res) => {
      dispatch(changeNewAlbumAction(res));
    });
  };
};

export const getTopListAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case 3:
          dispatch(changeUpRanking(res));
          break;
        case 1:
          dispatch(changeHotRanking(res));
          break;
        case 0:
          dispatch(changeNewRanking(res));
          break;
        case 2:
          dispatch(changeOriginRanking(res));
          break;
        // case 6:
        //   dispatch(changeUSARanking(res));
        //   break;
        // case 7:
        //   dispatch(changeKTVRanking(res));
        //   break;
        default:
      }
    });
  };
};
