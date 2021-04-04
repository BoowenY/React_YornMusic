import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { PlayerBarWrapper, Control, PlayInfo, Operator } from "./style";
import { Slider } from "antd";
import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getSongDetailAction,
  changeSequnenceAction,
  changeCurrentSong,
} from "../store/actionCreators";
import { NavLink } from "react-router-dom";

export default memo(function YNPlayerBar() {
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch();

  const { currentSong, sequence } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      sequence: state.getIn(["player", "sequence"]),
    }),
    shallowEqual
  );

  const picUrl = (currentSong.al && currentSong.al.picUrl) || " ";
  const singerName = (currentSong.ar && currentSong.ar[0].name) || " ";
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");

  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    audioRef.current.play().then(res => {
      setIsPlaying(true);
    })
  }, [currentSong]);

  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const timeUpdate = (e) => {
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000);
      setProgress((currentTime / duration) * 100);
    }
  };

  const handleMusicEnded = e => {
    if(sequence === 2) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    else {
      dispatch(changeCurrentSong(1))
    }
  }

  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) currentSequence = 0;
    dispatch(changeSequnenceAction(currentSequence));
  };

  const sliderChange = useCallback(
    (value) => {
      setProgress(value);
      const time = (value / 100) * duration;
      setCurrentTime(time);
      setIsChanging(true);
    },
    [duration]
  );

  const sliderAfterChange = useCallback(
    (value) => {
      const time = ((value / 100) * duration) / 1000;
      audioRef.current.currentTime = time;
      setCurrentTime(time * 1000);
      setIsChanging(false);
      if (!isPlaying) {
        playMusic();
      }
    },
    [duration, isPlaying, playMusic]
  );

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button
            className="sprite_playbar prev"
            onClick={(e) => dispatch(changeCurrentSong(1))}
          ></button>
          <button
            className="sprite_playbar play"
            onClick={(e) => playMusic()}
          ></button>
          <button
            className="sprite_playbar next"
            onClick={(e) => dispatch(changeCurrentSong(-1))}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{singerName}</span>
            </div>
            <div className="progress">
              <Slider
                defaultValue={30}
                value={progress}
                onAfterChange={sliderAfterChange}
                onChange={sliderChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button
              className="sprite_playbar btn loop"
              onClick={(e) => changeSequence()}
            ></button>
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={e => timeUpdate(e)} onEnded={e => handleMusicEnded(e)}/>
    </PlayerBarWrapper>
  );
});
