import React, { memo, useEffect } from "react";
import { HotRecommendWrapper } from "./style";
import YNTheme_Header_Recommend from "@/components/Theme_Header_Recommend";
import Recommend_Ranking from "../../../../../../components/Recommend_Ranking";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getHotRecommendsAction } from "../../store/actionCreators";
import YNSongsCover from "../.../../../../../../../components/SongsCover";
import YNNewAlbum from '../New_Album_Recommend'
const HOT_RECOMMEND_LIMIT = 12;
export default memo(function YNHot_Recommend() {
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);
  return (
    <HotRecommendWrapper>
      <YNTheme_Header_Recommend title="热门推荐" />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => (
          <YNSongsCover key={item.id} info={item} />
        ))}
      </div>
      <YNNewAlbum/>
      <Recommend_Ranking />
    </HotRecommendWrapper>
  );
});
