import { getSongDetail } from "@/services/player";
import * as actionTyoes from "./constant";
import { getRandom } from "@/utils/math-util";

const changeCurrentSongAction = (currentSong) => ({
  type: actionTyoes.CHANGE_CURRENT_SONG,
  currentSong,
});

const changePlayListAction = (playList) => ({
  type: actionTyoes.CHANGE_PLAY_LIST,
  playList,
});

const changeCurrentSongIndexAction = (index) => ({
  type: actionTyoes.CHANGE_CURRENT_SONG_INDEX,
  index,
});

export const changeSequnenceAction = (sequence) => ({
  type: actionTyoes.CHANGE_SEQUENCE,
  sequence,
});

export const changeCurrentSong = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"]);
    const sequence = getState().getIn(["player", "sequence"]);
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
    switch (sequence) {
      case 1:
        let randomIndex = getRandom(playList.length);
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandom(playList.length);
        }
        currentSongIndex = randomIndex;
        break;
      default:
        currentSongIndex += tag;
        if (currentSongIndex === playList.length) currentSongIndex = 0;
        if (currentSongIndex === -1) currentSongIndex = playList.length - 1;
    }
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
  };
};

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"]);
    const index = playList.findIndex((item) => item.id === ids);
    if (index !== -1) {
      dispatch(changeCurrentSongIndexAction(index));
      const song = playList[index];
      dispatch(changeCurrentSongAction(song));
    } else {
      getSongDetail(ids).then((res) => {
        const song = res.songs && res.songs[0];
        if (!song) return;
        const newPlayList = [...playList];
        newPlayList.push(song);
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));
      });
    }
  };
};
