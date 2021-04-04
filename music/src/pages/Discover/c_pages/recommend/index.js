import React, { memo } from "react";
import { RecommendWrapper, Content, RecommendContent } from "./style";
import YNTopBanner from "./c_cpns/Top_Banner";
import YNHotRecommend from './c_cpns/Hot_Recommend'
import YNNewAlbum from './c_cpns/New_Album'
import YNRecommendRanking from './c_cpns/RecommendRanking'
function YNRecommend() {
  return (
    <RecommendWrapper>
      <YNTopBanner />
      <Content className="wrap-v2">
      <RecommendContent>
        <YNHotRecommend/>
        <YNNewAlbum/>
        <YNRecommendRanking/>
      </RecommendContent>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(YNRecommend);
