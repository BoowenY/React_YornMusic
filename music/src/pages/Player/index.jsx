import React, { memo } from "react";
import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";
export default memo(function YNPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>YNPlayerInfo</h2>
          <h2>YNSongsContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>YNSimiPlaylist</h2>
          <h2>YNSimiSongs</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});
